const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Deal, Tag, Search, Merchant } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


// from typedefs, we might want to use the [ID]
// checkout(products: [ID]!): Checkout


// idea for search history
// first we would get search history by user, then break it down to get personalized deals

const resolvers = {
  Query: {
    getCategories: async () => {
      return await Category.find();
    },
    getCategoryById: async (parent, { categoryId }) => {
      return await Category.findById(categoryId);
    },

    getAllTags: async () => {
      return await Tag.find();
    },
    getTagById: async (parent, { tagId }) => {
      return await Tag.findById(tagId);
    },

    getAllMerchants: async () => {
      return await Merchant.find();
    },
    getMerchantById: async (parent, { merchantId }) => {
      return await Merchant.findById(merchantId);
    },
    // review this later
    getMerchantByName: async (parent, { name }) => {
      return await Merchant.find({ name: name });
    },
    // needs review
    getMerchantByCategory: async (parent, { categoryId }) => {
      return await Merchant.find({ "categories.categoryId": categoryId });
    },

    getUserById: async (parent, { userId }) => {
      return await User.findById(userId);
    },
    getFollowersByUserId: async (parent, { userId }) => {
      return await User.find({ "followers.userId": userId });
    },
    getFollowingByUserId: async (parent, { userId }) => {
      return await User.find({ "following.userId": userId });
    },

    // question here, does this need .populates attached? don't all Deal queries need it?
    getAllDeals: async () => {
      return await Deal.find();
    },
    getDealById: async(parent, { dealId })=>{
      return await Deal.findById(dealId).populate('category').populate('tags').populate('merchant');
    },
    // do we need quotes around expiration and likes
    getHotDeals: async() => {
      return await Deal.find({ expiration: {$gt: Date.now } }).sort({ likes: -1 }).limit(10);
    },
    
    // I picked up starting here
    // other notes from my work, i added tagId: ID! in typedefs on updateTag, and updateCategory, updateMerchant
 
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    // I could only figure out the logic for the 'keyword' of a search.
    getPersonalizedDealsByUserId: async(parent, args, context)=>{
      context.user.searchHistory.forEach(search => {
        let keyword = search.keyword;
        return await Deal.find({ 
          $or: [ 
            {description: { $regex: keyword } }, 
            {title: { $regex: keyword } } 
          ]
        })
      })
    },

    // https://mongoosejs.com/docs/api.html#query_Query-and
    // logic here is finding deals that will expire in the next week
    getExpiringDeals: async() => {
      let currentDate = Date.now;
      let weekAheadDate = currentDate.getDate() + 7;
      return await Deal.find({
        $and: [
          {expiration: {$gt: currentDate } },
          {expiration: {$lt: weekAheadDate } },
        ]
      })
    },

    // i have a idea here, should we pass in userId as an arugment, or
    // or grab userId from something like context.user._id
    getPostedDealsByUserId: async (parent, { userId }) => {
      return await Deal.find({ "submittedBy.userId": userId });
    },

    getDealsByMerchantId: async (parent, { merchantId }) => {
      return await Deal.find({ "merchant.merchantId": merchantId });
    },

    // saved deals is a private thing right, so this one could use context.user.savedDeals ?
    // first ill try by the argument userId
    getSavedDealsByUserId: async (parent, { userId }) => {
      return // yeah this seems too complicated, context seems better
    },
    // second attempt is using context, way easier, if it works
    getSavedDealsByUserId: async (parent, args, context) => {
      context.user.savedDeals.forEach(deal =>{
        return deal;
      })
    },

    getDealsByTagId: async (parent, { tagId }) => {
      return await Deal.find({ "tags.tagId": tagId });
    },

    // copied something very similar to my code from persoinalized deals
    getDealsByKeyword: async(parent, keyword)=>{
      return await Deal.find({ 
        $or: [ 
          {description: { $regex: keyword } }, 
          {title: { $regex: keyword } } 
        ]
      })
    },

    // i feel like there a better way to write this, but i think this should work
    getSearchHistoryByUserId: async (parent, { userId }) => {
      let user = await User.findById(userId);
      return user.searchHistory;
    },


    
    // all the following queries are from starter code, will be deleted
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    // keeping addUser and updateUser and login example code
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    // tag mutations
    createTag: async (parent, args) => {
      return await Tag.create(args);
    },
    updateTag: async (parent, {tagId, tagName, color}) => {
      // do we need to remove old tag from all deals, users and merchants first? then add in the new updated one?
      return await Tag.findByIdAndUpdate(tagId, { "tagName": tagName } );
    },

    // category mutations
    createCategory: async (parent, args) => {
      return await Category.create(args);
    },
    // small question here, I think we cant just use "name" needs to be categoryName, change in model and typedefs
    updateCategory: async (parent, {categoryId, name} ) => {
      return await Category.findByIdAndUpdate(categoryId, { "name": name }, { new: true } );
    },

    // merchant mutations
    createMerchant: async (parent, args) => {
      return await Merchant.create(args);
    },
    // not sure about this one, args.merchantId?
    updateMerchant: async (parent, args) => {
      return await Merchant.findByIdAndUpdate(args.merchantId, args)
    },

    // deal mutations
    // after looking up "input" for over an hour... i dont feel comfortable using it still
    // if we dont want to use input, we can just use all the parameters in line
    postDeal: async (parent, args) => {
      return await Deal.create(args);
    },
    // im leaning more and more towards not using input in our typedefs, again, not sure about args.dealId
    updateDeal: async (parent, args) => {
      return await Deal.findByIdAndUpdate(args.dealId, args, { new: true } );
    },
    removeTagFromDeal: async (parent, { tagId, dealId } ) => {
      return await Deal.findByIdAndUpdate(dealId, { $pull: { "tags": { _id: tagId } } }, { new: true } );
    },

    // searchHistory mutation
    // i think we need a new typedef mutation, createSearch, before we can add it to a users model
    createSearch: async (parent, args) => {
      return await Search.create(args);
    },
    addToSearchHistory: async (parent, { searchId }, context ) => {
      let userId = context.user._id
      return await User.findByIdAndUpdate(userId, { $addToSet: { searchHistory:  searchId } }, { new: true } )
    },

    // these two mutation were from starter code
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });
        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        return order;
      }
      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  }
};

module.exports = resolvers;
