var Cinema = require('../models/Cinema');

// GET
function getAll(request, response) {
  Cinema.find(function(error, cinemas) {
    if(error) response.json({message: 'Could not find any cinema'});

    response.json({cinemas: cinemas});
  }).select('-__v');
}

// POST
function createCinema(request, response) {
  var cinema = new Cinema(request.body);

  cinema.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate cinema' + error});

    response.json({cinema: cinema});
  });
}

// GET
function getCinema(request, response) {
  var id = request.params.id;

  Cinema.findById({_id: id}, function(error, cinema) {
    if(error) response.json({message: 'Could not find cinema' + error});

    response.json({cinema: cinema});
  }).select('-__v');
}

function updateCinema(request, response) {
  var id = request.params.id;

  Cinema.findById({_id: id}, function(error, cinema) {
    if(error) response.json({message: 'Could not find cinema' + error});

    if(request.body.name) cinema.name = request.body.name;
    if(request.body.location) cinema.start = request.body.location;
    if(request.body.status) cinema.end = request.body.status;

    cinema.save(function(error) {
      if(error) response.json({messsage: 'Could not update cinema' + error});

      response.json({message: 'Cinema successfully updated', cinema: cinema});
    });
  }).select('-__v');
}

function removeCinema(request, response) {
  var id = request.params.id;

  Cinema.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete cinema' + error});

    response.json({message: 'Cinema successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createCinema: createCinema,
  getCinema: getCinema,
  updateCinema: updateCinema,
  removeCinema: removeCinema
}