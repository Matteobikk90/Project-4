var Cinema = require("../models/cinema");

function cinemasIndex(req, res){
  Cinema.find({}, function(err, cinemas) {
    if (err) return res.status(404).send(err);
    res.status(200).send(cinemas);
  });
}

function cinemasCreate(req, res){
  var cinema = new Cinema(req.body.cinema);
  cinema.save(function(err, cinema) {
    if (err) return res.status(500).send(err);
    res.status(201).send(cinema);
  });
}

function cinemasShow(req, res){
  var id = req.params.id;
  Cinema.findById({ _id: id }).populate("movies").exec(function(err, cinema) {
    if (err) return res.status(500).send(err);
    if (!cinema) return res.status(404).send(err);
    res.status(200).send(cinema);
  });
}

function cinemasUpdate(req, res){
  var id = req.params.id;
  Cinema.findByIdAndUpdate({ _id: id }, req.body.cinema, {new:true}, function(err, cinema){
    if (err) return res.status(500).send(err);
    if (!cinema) return res.status(404).send(err);
    res.status(200).send(cinema);
  });
}

function cinemasDelete(req, res){
  var id = req.params.id;
  Cinema.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send();
  });
}

module.exports = {
  cinemasIndex:  cinemasIndex,
  cinemasCreate: cinemasCreate,
  cinemasShow:   cinemasShow,
  cinemasUpdate: cinemasUpdate,
  cinemasDelete: cinemasDelete
};
