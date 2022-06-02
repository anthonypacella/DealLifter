const mongoose = require('mongoose');

const { Schema } = mongoose;

const dealSchema = new Schema({

  // needs to be changed
  // Link, original price, deal price, Merchant, Category, Tags, expiration date, title, description, submitted by User, Submitted on Date - - comments, last used(user counts), votecount 
  
  category:

  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
