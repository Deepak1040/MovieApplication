const Movie = require('../models/Movie')


exports.createMovie = async (request, response) => {
    try {
        const { name, duration, screen, leadActors, theater } = request.body;

        const movie = new Movie({
            name,
            duration,
            screen,
            leadActors,
            theater
        })

        await movie.save();

        response.status(200).json({
            success: true,
            message: "Movie Created",
            data: movie
        })

    } catch (error) {
        console.log("Movie Not Created!!");
        response.status(400).json({
            success: false,
            message: "Movie Not Created",
            error: error.message
        })
    }
}


exports.getAllMovies = async (request, response) => {
    try {
        const movie = await Movie.find();
        response.status(200).json({
            success: true,
            message: "Fetching All Movie ",
            data: movie
        })

    } catch (error) {
        console.log("Movie Not Found");

        response.status(400).json({
            success: false,
            message: "Movie Not Found",
            error: error.message
        })
    }
}

exports.getMovieById = async (request, response) => {
    try {
        const id = request.params.id;

        const movie = await Movie.findById(id);

        response.status(200).json({
            success: true,
            message: `${movie.name} movie found!!`,
            data: movie
        })
    } catch (error) {
        response.status(200).json({
            success: true,
            message: `${response.body.name} movie Not found!!`,
            error: error.message
        })
    }
}

exports.updateMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findByIdAndUpdate(id, request.body, {
            new: true,
            runValidators: true
        });

        if (!movie) {
            response.status(400).json({
                succes: false,
                message: "Movie not Found!!"
            })
        }

        response.status(200).json({
            success: true,
            message: "Movie Details Updated",
            data: movie
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: "Movie Not Updated",
            error: error.message
        })
    }
}


exports.deleteMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findByIdAndDelete(id);

        if (!movie) {
            console.log("Movie Not Deleted")
        }

        response.status(200).json({
            success: true,
            message: `${movie.name} Movie Deleted`
        })

    } catch (error) {
        console.log("Movie Not Deleted!!!");
        response.status(400).json({
            success: false,
            message: "Movie Not Updated",
            error: error.message
        })
    }
}