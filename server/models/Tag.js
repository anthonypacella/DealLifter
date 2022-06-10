const { Schema, model } = require('mongoose');

// tag model, what does it need?
// tageName
// we will seed the tags from the beginning
// later we can decide if we want users to customize tags, create tags, etc.

const tagSchema = new Schema(
  {
    tagName: {
      type: String,
      required: true,
    },
    // can delete color later if we dont need it
    color: {
      type: String,
      default: '#008080',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (timestamp) => dateFormat(timestamp),
    },
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

// can delete this virtual later if we dont need it
// tagSchema
//   .virtual('getTagCss')
//   // Getter
//   .get(function () {
//     return `color: ${this.color}`;
//   });

const Tag = model('Tag', tagSchema);

module.exports = Tag;
