angular
  .module('Cinem@pp')
  .controller('MoviesController', MoviesController);

MoviesController.$inject = ['$scope', 'Movie'];
function MoviesController($scope, Movie){

  var self              = this;

  self.movie          = {};

  self.createMovie    = createMovie;
  self.toggleAddMovie = toggleAddMovie;
  self.removeMovie    = removeMovie;

  function toggleAddMovie(){
    $("form#new-cinema").slideUp();
    $("form#edit-cinema").slideUp();
    $("form#new-movie").slideToggle("slow");
  }

  function createMovie(){
    var cinema = $scope.$parent.cinemas.cinema;
    self.movie.cinema = cinema.name;

    Movie.save({ movie: self.movie }, function(movie) {
      cinema.movies.push(movie);
      self.movie = {};
      toggleAddMovie();
      $('form#new-movie').trigger("reset");
    });
  }

  function removeMovie(movie){
    var cinema = $scope.$parent.cinemas.cinema;

    Movie.delete({ id: movie._id }, function(){
      var index = cinema.movies.indexOf(movie);
      cinema.movies.splice(index, 1);
      self.movie = {};
    });
  }

}
