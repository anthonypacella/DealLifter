const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const dealSchema = new Schema({

  // needs to be changed
  // Link, original price, deal price, Merchant, Category, Tags, 
  // expiration date, title, description, submitted by User, Submitted on Date 
  // - - comments, last used(user counts), votecount 

  // question, everything will be user inputted?
  // next step would be seeing if we could autopopulate 

  link: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  dealPrice: {
    type: Number,
    required: true,
  },
  Merchant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Merchant'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  title: {
    type: String
  },
  description: {
    type: String
  },
  submittedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  submittedOn: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // still needs work
  expiration: {
    type: Date,

  },
  // needs a companiopn function to only keep 10 numbers in this array, 
  // pop oldest number and add newest number, on user voting on isUsable
  // maybe start the array with ten '1's
  // whenever the sum of the numbers is less than 4, make deal Expired
  // one vote per user
  isUsable: [
    { 
      type: Number
    }
  ],
  // upvote is more for does the user like it or dislike it, will affect the deal feed
  upVote: {
    type: Number,

  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1024,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

dealSchema
  .virtual('getExpiration')
  .get(function() {
    return // still need write function
  })
  .virtual('setExpired')
  .get(function() {
    return // still need write function
  })

const Deal = model('Deal', dealSchema);

module.exports = Deal;
