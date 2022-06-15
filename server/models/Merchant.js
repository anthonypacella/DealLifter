const { Schema, model } = require('mongoose');

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
  homepage: {
    type: String,
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

const Merchant = model('Merchant', merchantSchema);

module.exports = Merchant;
