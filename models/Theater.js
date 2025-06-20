const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    facilities: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;