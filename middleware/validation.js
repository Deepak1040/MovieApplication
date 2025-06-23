const Joi = require("joi");

const validateUser = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(1).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(25).required(),
    mobileNumber: Joi.string().pattern(/^[6-9]\d{9}$/).required()
})


const validateMovie = Joi.object({
    name: Joi.string().trim().required(),
    duration: Joi.number().min(1),
    screen: Joi.number().min(1),
    leadActors: Joi.array().items(Joi.string()).required()
})

const validateTheater = Joi.object({
    name: Joi.string().trim().required(),
    location: Joi.string().trim().required(),
    capacity: Joi.number().min(1).required(),
    facilities: Joi.array().items(Joi.string()).default([""]).required()
})

const validateTicket = Joi.object({
    row: Joi.number().required(),
    column: Joi.array()
        .items(
            Joi.array()
                .items(Joi.number().required())
                .required()
        )
        .required()
})