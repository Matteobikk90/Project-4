var mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  title: String,
  description: String,
  actor: String,
  year: Number,
  website: String,
  cinemas: [{ type: mongoose.Schema.ObjectId, ref: 'Cinema' }]
});

module.exports = mongoose.model('Movie', movieSchema);