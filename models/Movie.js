const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },
    screen: {
        type: Number,
        required: true,
        min: 1
    },
    leadActors: {
        type: [String],
        required: true
    },
    theater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theater',
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;