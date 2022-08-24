const express = require('express');
const router = express.Router();
const carRoute = require('../controllers/car');

//<------------- get and post request for all cars ------------->
router
.route('/cars')
.get(carRoute.getAllCars)
.post(carRoute.postCar); 

//<-------------    ------------->
router
.route('/cars/:id')
.put(carRoute.editCar)
.delete(carRoute.deleteCar)



module.exports = router