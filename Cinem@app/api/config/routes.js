var express = require('express');
var router  = express.Router();

var cinemasController = require('../controllers/cinemasController');
var moviesController = require('../controllers/moviesController');

router.route('/')
  .get(cinemasController.cinemasIndex);

router.route('/cinemas')
  .get(cinemasController.cinemasIndex)
  .post(cinemasController.cinemasCreate);

router.route('/cinemas/:id')
  .get(cinemasController.cinemasShow)
  .put(cinemasController.cinemasUpdate)
  .patch(cinemasController.cinemasUpdate)
  .delete(cinemasController.cinemasDelete);

router.route('/movies')
  .get(moviesController.moviesIndex)
  .post(moviesController.moviesCreate);

router.route('/movies/:id')
  .get(moviesController.moviesShow)
  .put(moviesController.moviesUpdate)
  .patch(moviesController.moviesUpdate)
  .delete(moviesController.moviesDelete);

module.exports = router;

