var Movie = require("../models/movie");
var Cinema = require("../models/cinema");

function moviesIndex(req, res){
  Movie.find({}, function(err, movies) {
    if (err) return res.status(404).send(err);
    res.status(200).send(movies);
  });
}

function moviesCreate(req, res){
  var movie = new Movie(req.body.movie);
  movie.save(function(err){
    if (err) return res.status(500).send(err);
    var id = req.body.movie._id;
    Cinema.findOne({ id: id }, function(err, cinema){
      if(err) next(err);
      if(!cinema) res.status(404).send("not found");
      console.log(cinema);
      cinema.movies.push(movie);
      cinema.save(function(err, cinema) {
        res.status(201).send(movie);
      });
    });
  });
}

function moviesShow(req, res){
  var id = req.params.id;

  Movie.findById({ _id: id }, function(err, movie) {
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send(err);
    res.status(200).send(movie);
  });
}

function moviesUpdate(req, res){
  var id = req.params.id;

  Movie.findByIdAndUpdate({ _id: id }, req.body.movie, {new:true}, function(err, movie){
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send(err);
    res.status(200).send(movie);
  });
}

function moviesDelete(req, res){
  var id = req.params.id;

  Movie.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send();
  });
}

module.exports = {
  moviesIndex:  moviesIndex,
  moviesCreate: moviesCreate,
  moviesShow:   moviesShow,
  moviesUpdate: moviesUpdate,
  moviesDelete: moviesDelete
};
