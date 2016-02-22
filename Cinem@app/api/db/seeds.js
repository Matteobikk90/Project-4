var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/cinemapp';
mongoose.connect(databaseURL);

var Movie = require("../models/movie"); 
var Cinema    = require("../models/cinema");

var movie1 = new Movie({
  title: "Batman",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  actors: "Ben Stiller, Monica Bellucci, George Clooney",
  year: "1998",
  website: "www.google.com"
})

movie1.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie2 = new Movie({
  title: "V per Vendetta",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  actors: "Nicolas Cage, Martin Scorzese, Silverster Stallone",
  year: "2010",
  website: "www.google.com"
})

movie2.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie3 = new Movie({
  title: "Toy Story",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  actors: "Nicolas Cage, Martin Scorzese, Silverster Stallone",
  year: "2009",
  website: "www.google.com"
})

movie3.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie4 = new Movie({
  title: "Scarface",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  actors: "Nicolas Cage, Martin Scorzese, Silverster Stallone",
  year: "2006",
  website: "www.google.com"
})

movie4.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var cinema1 = new Cinema({
  name: "Warner Village",
  addrress: "Curtain Road 143, London, SE16EZ",
  phone: "0000000",
  image: "www.google.it",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "www.google.it",
  movies: [movie1, movie2]
})

cinema1.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema2 = new Cinema({
  name: "Village",
  addrress: "Hanbury Road 143, London, SE16EZ",
  phone: "0000000",
  image: "www.google.it",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "www.google.it",
  movies: [movie3, movie4]
})

cinema2.save();
