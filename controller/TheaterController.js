const Theater = require('../models/Theater');

exports.createTheater = async (request, response) => {
    try {
        const { name, location, capacity, facilities } = request.body;

        const theater = new Theater({
            name,
            location,
            capacity,
            facilities
        });

        await theater.save();

        response.status(201).json({
            success: true,
            data: theater
        });
    } catch (error) {
        console.error("Error creating theater:", error);
        response.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

exports.getAllTheater = async (request, response) => {
    try {
        const theater = await Theater.find();
        response.status(200).json({
            success: true,
            message: "Fetching All User Data",
            data: theater
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: "Error fetching Details!!"
        })
    }
}

exports.updateTheater = async (request, response) => {
    try {
        const id = request.params;

        const theater = Theater.findByIdAndUpdate(id, request.body);
        if (!theater) {
            response.status(400).json({
                succes: false,
                message: "Theater not Found!!"
            })
        }

        response.status(200).json({
            success: true,
            message: "Theater Details Updated",
            data: theater
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: "Theater Not Updated"
        })
    }
}