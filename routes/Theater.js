const express = require('express')

const { createTheater, getAllTheater, updateTheater, deleteTheater, getTheaterById } = require('../controller/TheaterController')
const { protect } = require('../middleware/authMiddleware');


const router = express.Router()
router.get('/theaters', getAllTheater);
router.post('/createtheater', createTheater);
router.put('/updatetheater/:id', updateTheater);
router.get('/gettheater/:id', getTheaterById);
router.delete('/deletetheater/:id', deleteTheater);

module.exports = router