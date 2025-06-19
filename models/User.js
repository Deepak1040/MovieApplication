const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please add Last Name"]
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[6-9]\d{9}$/,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('User', userSchema)