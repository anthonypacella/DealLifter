const mongoose = require('mongoose');

mongoose.connect(
  //   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deal-lifters', 
  process.env.MONGODB_URI || 'mongodb://localhost:27017/deal-lifters', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
