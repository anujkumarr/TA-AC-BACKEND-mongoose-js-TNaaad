var Address = require('./models/Address');
var Article = require('./models/Article');
var Users = require('./models/User');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/samples", (err) => {
  console.log(err ? err : "Connected to the database");
});
