var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Author = new Schema({
    Name : String,
    Country: String,
    BirthDate: String,
});

var Book = new Schema({
    Title : String,
    Author: Author,
    Price: Number,
    ISBN: String,
    Language: String,
    NumberOfPages: Number,
    Publisher: String,
});

module.exports = mongoose.model("Book", Book);