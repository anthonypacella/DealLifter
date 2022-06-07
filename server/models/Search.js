const { Schema, model } = require('mongoose');

const searchSchema = new Schema({

  keyword: {
    type: String,
    required: true
  },

  // they could search for these
  // searchTitle: { type: Boolean },
  // searchDescription: { type: Boolean },

  merchantFilter: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Merchant'
    }
  ],
  categoryFilter: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  tagFilter: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  
});


const Search = model('Search', searchSchema);

module.exports = Search;
