const express = require('express')
const { register, getAllUser } = require('../controller/UserController')

const router = express.Router()
router.post('/register', register)
router.get('/', getAllUser)

module.exports = router