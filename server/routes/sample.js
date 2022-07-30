const express = require('express');
const router = express.Router();
const homeRoute = require('../controllers/sample');
const middleware  = require('../middleware')

// router.get('/', homeRoute.homeRoute)

router.route('/')
.get(middleware, homeRoute.homeRoute)

router.get('/student', homeRoute.studentRoute)

module.exports = router