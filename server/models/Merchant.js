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
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = model('Merchant', merchantSchema);

module.exports = Product;
