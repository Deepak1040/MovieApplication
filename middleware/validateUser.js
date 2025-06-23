const Joi = require("joi");

const validateUser = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(1).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(25).required(),
    mobileNumber: Joi.string().pattern("/^[6-9]\d{9}$/").required()
})

module.exports = validateUser;