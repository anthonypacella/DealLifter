const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
  },
  link: {
    type: String,
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;
