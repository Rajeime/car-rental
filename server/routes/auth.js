const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth')

//<------------- post request to login ------------->
router
.route('/login')
.post(auth.login);

//<------------- post request to sign up ------------->
router
.route('/signUp')
.post(auth.signUp);


module.exports = router