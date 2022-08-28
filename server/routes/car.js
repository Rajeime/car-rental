const express = require('express');
const router = express.Router();
const carRoute = require('../controllers/car');

//<------------- get and post request for all cars ------------->
router
.route('/cars')
.get(carRoute.getAllCars)
.post(carRoute.postCar)
// .get(carRoute.findCarByType);

//<------------- get and update cars by specific id ------------->
router
.route('/cars/:id')
.put(carRoute.editCar)
.delete(carRoute.deleteCar)
.get(carRoute.findCarById);

router
.route('/images')
.post(carRoute.uploadImage);

//<------------- find car by type ------------->
// router
// .route('/cars/cartype')
// .get(carRoute.findCarByType);


module.exports = router