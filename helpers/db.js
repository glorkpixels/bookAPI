var mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
module.exports = () => {
  try {
    mongoose.connect('mongodb://mongodb/bookAPI')
  .catch(err => {
    console.log(err)
  })
    mongoose.connection.on('open', () => {
      console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
      console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
    
  } 
  catch (error) {
    console.log('MongoDB: Not connected: ' + Error);
  }
    
}