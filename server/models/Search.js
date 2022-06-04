const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const searchSchema = new Schema({

  keyword: {
    type: String,
    required: true
  },

  searchMerchant: { type: Boolean },
  searchCategory: { type: Boolean },
  searchTags: { type: Boolean },
  searchTitle: { type: Boolean },
  searchDescription: { type: Boolean },

});


const Search = model('Search', searchSchema);

module.exports = Search;
