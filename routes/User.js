const express = require('express')
const { register, getAllUser, updateUser } = require('../controller/UserController')

const router = express.Router()
router.post('/register', register)
router.get('/', getAllUser)
router.put('/updateDetails', updateUser)

module.exports = router