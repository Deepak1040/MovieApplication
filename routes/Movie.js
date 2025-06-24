const express = require('express')

const Movie = require('../models/Movie');
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controller/MovieController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/getMovieById', getMovieById);
router.post('/createMovie', protect, createMovie);
router.put('/updateMovie/:id', protect, updateMovie);
router.delete('/deleteMovie/:id', protect, deleteMovie);

module.exports = router;