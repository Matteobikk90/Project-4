var express  = require('express');
var router   = express.Router();
// var passport = require("passport");

//require controllers
var usersController = require('../controllers/usersController');
var postsController = require('../controllers/cinemasController');

//authentication routes
// router.post('/signin', usersController.signin);
// router.post('/signup', usersController.signup);

//user and post routes
router.route('/')

         //GET all cinemas
  .get(cinemasController.getAll)

  //POST new cinemas
  .post(cinemasController.createCinema);


router.route('/cinemas/:id')

  // GET 1 cinema
  .get(cinemasController.getCinema)

  // UPDATE cinema
  .patch(cinemasController.updateCinema)

  // DELETE cinema
  .delete(cinemasController.removeCinema);


module.exports = router;