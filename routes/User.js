const express = require('express')
const { register, getAllUser, updateUser, deleteUser, getUserById } = require('../controller/UserController')
const { protect } = require('../middleware/authMiddleware');

const router = express.Router()
router.post('/register', register);
router.get('/users', getAllUser);
router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:email', deleteUser);



module.exports = router
