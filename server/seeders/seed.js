const db = require('../config/connection');
const { Category, Deal, Merchant, Search, Tag, User } = require('../models');

const categorySeeds = require('./categorySeeds.json');
const dealSeeds = require('./dealSeeds.json');
const merchantSeeds = require('./merchantSeeds.json');
const searchSeeds = require('./searchSeeds.json');
const tagSeeds = require('./tagSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Category.deleteMany({});
    await Deal.deleteMany({});
    await Merchant.deleteMany({});
    await Search.deleteMany({});
    await Tag.deleteMany({});
    await User.deleteMany({});
    
    const users = await User.insertMany(userSeeds);
    const deals = await Deal.insertMany(dealSeeds);
    const merchants = await Merchant.insertMany(merchantSeeds);
    const categories = await Category.insertMany(categorySeeds);
    const tags = await Tag.insertMany(tagSeeds);
    const searches = await Search.insertMany(searchSeeds);

    for (newDeal of deals) {
      const tempMerchant = merchants[Math.floor(Math.random() * merchants.length)];
      newDeal.merchant = tempMerchant._id;
      await newDeal.save();
      
      tempMerchant.deals.push(newDeal._id);
      await tempMerchant.save();
      
      const tempCategory = categories[Math.floor(Math.random() * categories.length)];
      newDeal.category = tempCategory._id;
      await newDeal.save(); 
      
      const tempTagOne = tags[Math.floor(Math.random() * tags.length)];
      const tempTagTwo = tags[Math.floor(Math.random() * tags.length)];
      tempTagOne === tempTagTwo ? newDeal.tags = [tempTagOne._id] : newDeal.tags = [tempTagOne._id, tempTagTwo._id]
      await newDeal.save(); 

      const tempUser = users[Math.floor(Math.random() * users.length)];
      newDeal.submittedBy = tempUser._id;
      await newDeal.save();

      console.log(newDeal);
    }

    for (newUser of users) {
      const tempSearchOne = searches[Math.floor(Math.random() * searches.length)];
      const tempSearchTwo = searches[Math.floor(Math.random() * searches.length)];
      tempSearchOne === tempSearchTwo ? newUser.searchHistory = [tempSearchOne._id] : newUser.searchHistory = [tempSearchOne._id, tempSearchTwo._id]
      await newUser.save();
      console.log(newUser);
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});