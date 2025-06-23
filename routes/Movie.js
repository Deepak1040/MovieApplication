const express = require('express')

const Movie = require('../models/Movie');
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controller/MovieController');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/getMovieById', getMovieById);
router.post('/createMovie', createMovie);
router.put('/updateMovie/:id', updateMovie);
router.delete('/deleteMovie/:id', deleteMovie);

module.exports = router;