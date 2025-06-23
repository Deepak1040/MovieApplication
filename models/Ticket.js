const { required } = require('joi');
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    row: {
        type: Number,
        required: true
    },
    column: {
        type: [Number][Number],
        required: true
    },
    
})