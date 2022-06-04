const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const merchantSchema = new Schema({

  // change later
  // Merchant - Name, website, description, Categories/Tags

  
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  logo: {
    type: String
  },
  link: {
    type: String
  },  
  categories: 
    [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
  deals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Deal'
    }
  ],
  
});

const Product = model('Merchant', merchantSchema);

module.exports = Product;
