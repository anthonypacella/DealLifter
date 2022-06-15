const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Deal, Tag, Search, Merchant } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    getAllCategories: async () => {
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
      return await Merchant.find().populate('categories').populate('deals');
    },
    getMerchantById: async (parent, { merchantId }) => {
      return await Merchant.findById(merchantId).populate('categories').populate('deals');
    },
    // review this later
    getMerchantByName: async (parent, { name }) => {
      return await Merchant.findOne({ name: name }).populate('categories').populate('deals');
    },
    // needs review
    getMerchantByCategory: async (parent, { categoryId }) => {
      return await Merchant.find({ "categories.categoryId": categoryId }).populate('categories').populate('deals');
    },

    getUserById: async (parent, { userId }) => {
      return await User.findById(userId).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getMe: async (parent, args, context) => {
      return await User.findById(context.user._id).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getUserByUserName: async (parent, { userName }) => {
      return await User.findOne({ userName: userName }).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getUserByUserEmail: async (parent, { email }) => {
      return await User.findOne({ email: email }).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getFollowersByUserId: async (parent, { userId }) => {
      return await User.find({ "followers.userId": userId }).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getFollowingByUserId: async (parent, { userId }) => {
      return await User.find({ "following.userId": userId }).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
    },
    getAllDeals: async () => {
      return await Deal.find().populate('category').populate('tags').populate('merchant').populate('submittedBy').sort({ submittedOn: -1 });
    },
    getDealById: async(parent, { dealId })=>{
      return await Deal.findById(dealId).populate('category').populate('tags').populate('merchant').populate('submittedBy');
    },
    // do we need quotes around expiration and likes
    getHotDeals: async() => {
      return await Deal.find({ expiration: {$gt: Date.now() } })
      .populate('category').populate('tags').populate('merchant').populate('submittedBy')
      .sort({ likes: -1 }).limit(10);
    },
    
    getPersonalizedDealsByUserId: async(parent, args, context)=>{
      let dealsArray = [];
      let userId = context.user._id;
      const user = await User.findOne({_id:userId});
      console.log("SearchHistory");
      console.log(user.searchHistory);
      user.searchHistory.forEach(keyword => {        
        let dealsArrayTemp = Deal.find({ 
          $or: [ 
            {"description": new RegExp(keyword, "i")} , 
            {"title": new RegExp(keyword, "i")} ,
          ]
        })
        // .where("merchant").in(merchantFilter)
        // .where("category").in(categoryFilter)
        // .find( {"tags": { '$elemMatch': { '$in': tagFilter} } } )
        .populate('category').populate('tags').populate('merchant').populate('submittedBy');

        // dealsArray = dealsArray.concat(dealsArrayTemp);
        dealsArray = dealsArray.concat(dealsArrayTemp.filter((item) => dealsArray.indexOf(item) < 0));
      })
      return dealsArray;
    },

    // https://mongoosejs.com/docs/api.html#query_Query-and
    // logic here is finding deals that will expire in the next week
    getExpiringDeals: async() => {
      // let currentDate = Date.now();
      // let weekAheadDate = currentDate.getDate() + 7;
      // return await Deal.find({
      //   $and: [
      //     {expiration: { $gt: currentDate } },
      //     {expiration: { $lt: weekAheadDate } },
      //   ]
      // }).populate('category').populate('tags').populate('merchant').populate('submittedBy');
      return await Deal.find({ expiration: {$gt: Date.now() } })
      .populate('category').populate('tags').populate('merchant').populate('submittedBy')
      .sort({ expiration: -1 }).limit(10);
    },

    // this is used on both viewing my own profile page, and viewing anothers
    getPostedDealsByUserId: async (parent, { userId }) => {
      return await Deal.find({ submittedBy: userId }).populate('category').populate('tags').populate('merchant').populate('submittedBy');
    },

    getDealsByMerchantId: async (parent, { merchantId }) => {
      return await Deal.find({ "merchant": merchantId }).populate('category').populate('tags').populate('merchant').populate('submittedBy');
    },

    // saved deals is a private thing, so this one could use context.user.savedDeals
    getSavedDealsByUserId: async (parent, args, context) => {
      return context.user.savedDeals;
    },

    getDealsByTagId: async (parent, { tagId }) => {
      return await Deal.find({ "tags.tagId": tagId }).populate('category').populate('tags').populate('merchant').populate('submittedBy');
    },

    getDealsByKeyword: async(parent, {keyword, merchantFilter, categoryFilter, tagFilter})=>{
      // let search = createSearch({keyword, merchantFilter, categoryFilter, tagFilter});
      // addToSearchHistory(search._id);

      return await Deal.find({ 
        $or: [ 
          {"description": new RegExp(keyword, "i")} , 
          {"title": new RegExp(keyword, "i")} ,
        ]
      })
      // .where("merchant").in(merchantFilter)
      // .where("category").in(categoryFilter)
      // .find( {"tags": { '$elemMatch': { '$in': tagFilter} } } )
      .populate('category').populate('tags').populate('merchant').populate('submittedBy');
    },


    // i feel like there a better way to write this, but i think this should work
    getSearchHistoryByUserId: async (parent, { userId }) => {
      let user = await User.findById(userId).populate('savedDeals').populate('favoriteTags').populate('following').populate('followers').populate('searchHistory');
      return user.searchHistory;
    },


    // all the following queries are from starter code, will be deleted
    // products: async (parent, { category, name }) => {
    //   const params = {};
    //   if (category) {
    //     params.category = category;
    //   }
    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }
    //   return await Product.find(params).populate('category');
    // },

    // product: async (parent, { _id }) => {
    //   return await Product.findById(_id).populate('category');
    // },

    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });
    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
    //     return user;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },

    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });
    //     return user.orders.id(_id);
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },

    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];
    //   const { products } = await order.populate('products');
    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });
    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });
    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });
    //   return { session: session.id };
    // }
  },

  // mutations
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
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName: userName });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials - No user found');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials - Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    // tag mutations
    createTag: async (parent, { tagName, color}) => {
      return await Tag.create({tagName, color});
    },
    updateTag: async (parent, {tagId, tagName, color}) => {
      // do we need to remove old tag from all deals, users and merchants first? then add in the new updated one?
      return await Tag.findByIdAndUpdate(tagId, { "tagName": tagName, "color": color}, { new: true }  );
    },

    // category mutations
    createCategory: async (parent, args) => {
      // had an idea here to create a link property from the name of the category
      return await Category.create(args);
    },
    // small question here, I think we cant just use "name" needs to be categoryName, change in model and typedefs
    updateCategory: async (parent, {categoryId, name, icon, link} ) => {
      return await Category.findByIdAndUpdate(categoryId, { "name": name, "icon": icon, "link": link }, { new: true } );
    },

    // merchant mutations
    createMerchant: async (parent, args) => {
      return await Merchant.create(args);
    },
    // not sure about this one, args.merchantId?
    updateMerchant: async (parent, args) => {
      return await Merchant.findByIdAndUpdate(args.merchantId, args, { new: true } )
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
    // likeDeal: async (parent, {dealId}) => {
    //   // return await Deal.findByIdAndUpdate(dealId, { $inc: { likes: 1 } }, { new: true } );
    //   return await Deal.findOneAndUpdate({"_id":dealId}, { $inc: { likes: 1 } }, { new: true } )
    // },
    likeDeal: async (parent, { dealId }) => {
      // return await Deal.findByIdAndUpdate(args.dealId, { $inc: { likes: 1 } }, { new: true } );
      const deal = await Deal.findOne({_id: dealId});
      return await Deal.findOneAndUpdate(
        { _id: deal._id },
        { $inc: { likes: 1 } },
        { new: true }
      );
    },
    // not going to use this //
    removeTagFromDeal: async (parent, { tagId, dealId } ) => {
      const deal = await Deal.findOne({_id: dealId});
      return await Deal.findOneAndUpdate({ _id: deal._id }, { $pull: { "tags": { _id: tagId } } }, { new: true } );
    },

    saveDealById: async (parent, { dealId }, context) => {
      // return await User.findByIdAndUpdate(context.user._id, { $addToSet: { savedDeals: dealId } }, { new: true } )
      // if (context.user) {
      const deal = await Deal.findOne({_id: dealId});

      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedDeals: deal._id } }
      );
      // }
    },
    favoriteTagById: async (parent, { tagId }, context) => {
      const tag = await Tag.findOne({_id: tagId});
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { favoriteTags: tag._id } }
      );
    },

    unfavoriteTagById: async (parent, { tagId }, context) => {
      const tag = await Tag.findOne({_id: tagId});
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { favoriteTags: tag._id } }
      );
    },

    addToFollowing: async (parent, { userId }, context) => {
      addToFollowers(userId);
      return await User.findByIdAndUpdate(context.user._id, { $addToSet: { following: userId } }, { new: true } )
    },
    addToFollowers: async (parent, { userId }, context) => {
      return await User.findByIdAndUpdate(userId, { $addToSet: { followers: context.user._id } }, { new: true } )
    },

    // searchHistory mutation
    // i think we need a new typedef mutation, createSearch, before we can add it to a users model
    createSearch: async (parent, args) => {
      return await Search.create(args);
    },
    addToSearchHistory: async (parent, args, context ) => {
      let userId = context.user._id
      // return await User.findByIdAndUpdate(userId, { $addToSet: { searchHistory: searchId } }, { new: true } )
      const user = await User.findOne({_id:userId});
      return await User.findOneAndUpdate({_id:user._id},{ $addToSet: { searchHistory: args.keyword } }, { new: true });
    },

    // these two mutation were from starter code
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });
    //     await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
    //     return order;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;
    //   return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
  }
};

module.exports = resolvers;