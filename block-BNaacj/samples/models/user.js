var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type:String, minlength:5, maxlength:15},
    age: Number,
    favorites: [String],
    marks: [Number],
    createdAt: {type:Date, default:Date.now()}
  },
  { timestamps: true }
);
