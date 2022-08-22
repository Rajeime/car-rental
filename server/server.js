const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = process.env.port || 8080;
const cors = require('cors');

//<------- ROUTES ------->
const routes = require('./routes/car');

//<------- Middlewares -------->
app.use(cors())
app.use(routes);
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//<------- Start Express App ------->
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
	if (err) throw err

	console.log('MongoDB Connected')

	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`)
	})
})



