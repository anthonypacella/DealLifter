const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
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
  favoriteTags: [String],
  followed: [User]
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

const User = mongoose.model('User', userSchema);

module.exports = User;
