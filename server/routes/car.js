const express = require('express');
const router = express.Router();
const carRoute = require('../controllers/car');

//get all cars
router
.route('/cars')
.get(carRoute.getAllCars)
.post(carRoute.postCar); 



module.exports = router