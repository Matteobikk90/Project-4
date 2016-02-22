angular
  .module('Cinem@pp')
  .controller('CinemasController', CinemasController);

CinemasController.$inject = ['Cinema'];
function CinemasController(Cinema){

  var self             = this;

  self.cinemas           = Cinema.query();
  self.cinema            = {};
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
    $("form#new-project").slideUp();
    $('#cinemas').slideUp();

    self.cinema = Cinema.get({id: cinema._id}, function(data){
      $('#show').slideDown();
      $('#projects').slideDown();
    });
  }

  function updateCinema() {
    Cinema.update({ id: self.editCinema._id }, { cinema: self.editCinema }, function(response){
      self.cinemas.forEach(function(cinema, index, array){
        if (cinema._id === response._id) {
          array[index] = response;
        };
      })
      self.editcinema = {}
      toggleEditForm();
    });
  }

  function createcinema(){
    Cinema.save({ cinema: self.cinema }, function(cinema) {
      self.cinemas.push(cinema);
      self.cinema = {};
      toggleNewForm();
    });
  }

  function deleteCinema(cinema){
    Cinema.delete({id: cinema._id});
    var index = self.cinemas.indexOf(cinema);
    self.cinemas.splice(index, 1);
  }

  function editCinema(cinema){
    self.editcinema = angular.copy(cinema);
    $("form#new-cinema").slideUp();
    $("form#new-project").slideUp();
    toggleEditForm();
  }

  function toggleShowCinemas(){
    $("#show").slideUp("slow");
    $("#projects").slideUp("slow");
    $("form#new-cinema").slideUp();
    $("form#edit-cinema").slideUp();
    $("form#new-project").slideUp();

    setTimeout(function(){
      self.cinema = {};
      $('#cinemas').slideDown();
    }, 600);
  }

  function toggleNewForm(){
    $("form#edit-cinema").slideUp();
    $("form#new-project").slideUp();
    $("form#new-cinema").slideToggle("slow");
  }

  function toggleEditForm(){
    $("form#new-cinema").slideUp();
    $("form#new-project").slideUp();
    $("form#edit-cinema").slideToggle("slow");
  }

}
