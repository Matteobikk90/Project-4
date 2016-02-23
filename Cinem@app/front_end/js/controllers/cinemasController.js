angular
  .module('Cinem@pp')
  .controller('CinemasController', CinemasController);

CinemasController.$inject = ['Cinema'];
function CinemasController(Cinema){

  var self             = this;

  self.cinemas           = Cinema.query();
  self.cinema            = {};
  self.createCinema      = createCinema;
  self.showCinema        = showCinema;
  self.editCinema        = {}
  self.updateCinema      = updateCinema;
  self.removeCinema      = deleteCinema;
  self.editCinema        = editCinema;

  self.toggleEditForm  = toggleEditForm;
  self.toggleNewForm   = toggleNewForm;
  self.toggleShowCinemas = toggleShowCinemas;

  function showCinema(cinema){
    $("form#new-cinema").slideUp();
    $("form#edit-cinema").slideUp();
    $("form#new-movie").slideUp();
    $('#cinemas').slideUp();
    console.log("cinema")

    self.cinema = Cinema.get({id: cinema._id}, function(data){
      $('#show').slideDown();
      $('#movies').slideDown();
    });
  }

  function updateCinema() {
    Cinema.update({ id: self.editCinema._id }, { cinema: self.editCinema }, function(response){
      self.cinemas.forEach(function(cinema, index, array){
        if (cinema._id === response._id) {
          array[index] = response;
        };
      })
      self.editCinema = {}
      toggleEditForm();
      console.log("yes")
    });
  }

  function createCinema(){
    Cinema.save({ cinema: self.cinema }, function(cinema) {
      self.cinemas.push(cinema);
      self.cinema = {};
      toggleNewForm();
      console.log("cinema")
    });
  }

  function deleteCinema(cinema){
    Cinema.delete({id: cinema._id});
    var index = self.cinemas.indexOf(cinema);
    self.cinemas.splice(index, 1);
    console.log("cinema")
  }

  function editCinema(cinema){
    self.editCinema = angular.copy(cinema);
    $("form#new-cinema").slideUp();
    $("form#new-movie").slideUp();
    toggleEditForm();
    console.log("yes")
  }

  function toggleShowCinemas(){
    $("#show").slideUp("slow");
    $("#movies").slideUp("slow");
    $("form#new-cinema").slideUp();
    $("form#edit-cinema").slideUp();
    $("form#new-movie").slideUp();
    console.log("yes")

    setTimeout(function(){
      self.cinema = {};
      $('#cinemas').slideDown();
    }, 600);
  }

  function toggleNewForm(){
    $("form#edit-cinema").slideUp();
    $("form#new-movie").slideUp();
    $("form#new-cinema").slideToggle("slow");
    console.log("yes")
  }

  function toggleEditForm(){
    $("form#new-cinema").slideUp();
    $("form#new-movie").slideUp();
    $("form#edit-cinema").slideToggle("slow");
    console.log("yes")
  }

}
