var mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  title: String,
  description: String,
  actors: String,
  year: Number,
  website: String,
  // cinema: [{ type: mongoose.Schema.ObjectId, ref: 'Cinema' }]
});

module.exports = mongoose.model('Movie', movieSchema);