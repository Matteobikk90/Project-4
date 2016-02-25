var mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  title: String,
  description: String,
  actor: String,
  year: Number,
  image: String,
  website: String,
});

module.exports = mongoose.model('Movie', movieSchema);