const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    savedDeals: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Deal'
      }
    ],
    favoriteTags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    avatar: {
      type: String,
      default: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail.png"  
    },
    searchHistory: [
      {
        type: String,
        // ref: 'Search'
      }
    ], 
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('totalFollowers').get(function () {
  return this.followers.length;
});
userSchema.virtual('totalFollowing').get(function () {
  return this.following.length;
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


// user virtual that can count number of submitted deals
// another virtual that counts the votes from other users on certain deals (maybe on deal model)

const User = model('User', userSchema);

module.exports = User;
