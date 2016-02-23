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
  name: "The Lexi Cinema",
  address: "194B Chamberlayne Road, London, NW103JU",
  phone: "08717042069",
  image: "http://www.whereisthenomad.com/sites/default/files/styles/letterbox/public/lexi-letterbox.jpg?itok=9tw06mlq",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://thelexicinema.co.uk/",
  movies: [movie1, movie2, movie4]
})

cinema1.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema1 = new Cinema({
  name: "The Lexi Cinema",
  address: "194B Chamberlayne Road, London, NW103JU",
  phone: "08717042069",
  image: "http://www.whereisthenomad.com/sites/default/files/styles/letterbox/public/lexi-letterbox.jpg?itok=9tw06mlq",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://thelexicinema.co.uk/",
  movies: [movie1, movie2, movie4]
})

cinema1.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})
var cinema1 = new Cinema({
  name: "The Lexi Cinema",
  address: "194B Chamberlayne Road, London, NW103JU",
  phone: "08717042069",
  image: "http://www.whereisthenomad.com/sites/default/files/styles/letterbox/public/lexi-letterbox.jpg?itok=9tw06mlq",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://thelexicinema.co.uk/",
  movies: [movie1, movie2, movie4]
})

cinema1.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();

var cinema2 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema2.save();
