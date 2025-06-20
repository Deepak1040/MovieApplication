const express = require('express')
const { register, getAllUser, updateUser, deleteUser } = require('../controller/UserController')
const { protect } = require('../middleware/authMiddleware');

const router = express.Router()
router.post('/register', register)
router.get('/', getAllUser)
router.put('/updateDetails/:id', updateUser)
router.delete('/deleteUser/:email', deleteUser)



module.exports = router