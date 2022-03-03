var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Author = new Schema({
    Name : String,
    Country: String,
    BirthDate: String,
});

module.exports = mongoose.model("Author", Author);