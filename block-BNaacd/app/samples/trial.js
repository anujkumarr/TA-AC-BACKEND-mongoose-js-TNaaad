var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: String,
  email: String,
  age: Number
})

var anotherSchema = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  age: {type: Number, default: 0},
});