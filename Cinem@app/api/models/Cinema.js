var mongoose = require('mongoose');

var CinemaSchema = mongoose.Schema({
	name: String,
    address: String,
    phone: Number,
    description: String,
    website: String,
    Image: String
});

module.exports = mongoose.model('Cinema', CinemaSchema);