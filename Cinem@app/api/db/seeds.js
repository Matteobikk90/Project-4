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

var cinema2 = new Cinema({
  name: "BFI Southbank",
  address: "21 Stephen Street, London, W1T1LN",
  phone: "02072551444",
  image: "http://i1.cdnds.net/12/42/618x415/-4.jpg",
  description: "BFI Southbank is a playground for film buffs, screening classic, contemporary, avant garde and traditional films from around the world and closer to home. Visitors can browse hundreds of hours of film and TV from the BFI (British Film Institute) National Archive, check out the drop-in studio cinema, and shop for a range of films and books at the Filmstore. There are also two welcoming bars serving food and drinks before and after screenings.",
  website: "https://thelexicinema.co.uk/",
  movies: [movie1, movie2, movie4]
})

cinema2.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema3 = new Cinema({
  name: "Tricycle Cinema",
  address: "269 Kilburn High Rd, London, NW67JR",
  phone: "02073726611",
  image: "http://cdn.londonandpartners.com/asset/76d780db6c4876c17c3b0942d6520741.jpg",
  description: "The Tricycle’s home in Brent comprises a theatre, cinema, art gallery, café and bar. It's open all year round. Inside, the Tricycle hosts a range of performances and films, and displays contemporary art in a variety of traditional and new media. The Tricycle Theatre has established a unique reputation for presenting plays that reflect the cultural diversity of its community, in particular by Black, Irish, Jewish, Asian and South African writers, as well as for responding to contemporary issues and events with its ground-breaking tribunal plays and political work. Education and community activities are an integral part of the artistic output of the Tricycle. Last year there were more than 46,000 attendances by young people to see films and plays, or to take part in workshops.",
  website: "http://www.tricycle.co.uk/",
  movies: [movie1, movie2, movie4]
})

cinema3.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema4 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema4.save();

var cinema5 = new Cinema({
  name: "Phoenix Cinema",
  address: "52 High Road, London, N29PJ",
  phone: "02084446789",
  image: "http://cdn.londonandpartners.com/asset/d3221bd35ed7b37052fb08cf597c7431.jpg",
  description: "East Finchely's Grade II listed Phoenix Cinema is the UK's oldest purpose-built cinema still in operation. A £1.1 million refurb was completed in 2010. Phoenix's film programme includes new releases, independent, foreign-language and specialist films, plus a repertoire of old and new classics. The venue regularly hosts a kids club, festivals, talks, screenings and school workshops.",
  website: "https://phoenixcinema.co.uk/PhoenixCinema.dll/Home",
  movies: [movie1, movie3, movie4]
})

cinema5.save();

var cinema6 = new Cinema({
  name: "Prince Charles Cinema",
  address: "7 Leicester Place, London, WC2H7BY",
  phone: "02074943654",
  image: "http://www.arthurlloyd.co.uk/PrinceCharlesTheatre/Theatre2.jpg",
  description: "Just off Leicester Square, the Prince Charles is an independent cinema offering cut-price tickets for a range of films: blockbusters as well as specialist screenings. Don't miss the sing-a-long nights, where audience participation is strongly encouraged. Belt out your favourites from The Sound of Music, Grease or the Rocky Horror Picture Show.",
  website: "http://www.princecharlescinema.com/",
  movies: [movie1, movie3, movie4]
})

cinema6.save();

var cinema7 = new Cinema({
  name: "Electric Cinema Shoreditch",
  address: "64-66 Redchurch St, London, E27DP",
  phone: "02033503490",
  image: "https://i.ytimg.com/vi/xHhLlPxGFVQ/maxresdefault.jpg",
  description: "The Electric Cinema Shoreditch provides plush leather armchairs for up to 50 cinema-goers. The film programme covers a broad range of quality mainstream and arthouse films and there is a full bar and deli serving quality food and drinks. Formerly the Aubin Cinema, The Electric is part of the Soho House Group.",
  website: "https://www.electriccinema.co.uk/shoreditch",
  movies: [movie1, movie3, movie4]
})

cinema7.save();

var cinema8 = new Cinema({
  name: "Rich Mix",
  address: "35-47 Bethnal Green Road, London, E16LA",
  phone: "02076137498",
  image: "http://www.constructionphotography.com/ImageThumbs/A088-05450/3/A088-05450_Exterior_of_the_Rich_Mix_cultural_centre_in_Bethnal_Green_East_London_UK.jpg",
  description: "Rich Mix is a cultural and community space in Shoreditch, East London, which houses three digital cinema screens showing main releases alongside independent, arthouse and world films, as well as documentaries. There is a full bar serving drinks and snacks before screenings and all profits go back into the community.",
  website: "http://www.richmix.org.uk/",
  movies: [movie1, movie3, movie4]
})

cinema8.save();

var cinema9 = new Cinema({
  name: "Gate Picturehouse",
  address: "87 Notting Hill Gate, London, W113JZ",
  phone: "08719025731",
  image: "https://files.list.co.uk/images/g/gate-exterior-view-lst145695.jpg",
  description: "Part of the Picturehouse group of cinemas, the Gate is a beautiful and intimate Edwardian single-screen cinema in Notting Hill. Specialising in foreign language and arthouse films, the Gate also shows mainstream releases and has a well-stocked bar and famously plush seats.",
  website: "https://www.picturehouses.com/cinema/Gate_Picturehouse",
  movies: [movie1, movie3, movie4]
})

cinema9.save();

var cinema10 = new Cinema({
  name: "Rio Cinema",
  address: "107 Kingsland High Street, London, E82PB",
  phone: "02072419410",
  image: "https://media.timeout.com/images/101720849/617/347/image.jpg",
  description: "The 100-year-old Rio Cinema on Kingsland High Street in Dalston proudly claims to serve sections of the community who are often ignored by mainstream commercial cinema. Annual film festivals showcase the work of Turkish, Kurdish, Spanish and Gay & Lesbian filmmakers. Plus there's midweek classic matinées, a kids' film club and babes-in-arms sessions.",
  website: "http://riocinema.org.uk/RioCinema.dll/Home",
  movies: [movie1, movie3, movie4]
})

cinema10.save();
