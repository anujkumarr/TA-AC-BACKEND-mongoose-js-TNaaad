var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to the database");
})