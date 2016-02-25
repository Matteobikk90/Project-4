var mongoose = require("mongoose");

var cinemaSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  image: String,
  description: String,
  website: String,
  movies: [{ type: mongoose.Schema.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Cinema', cinemaSchema);