const express = require('express');
const app = express();
const mongoose = require('express');
require('dotenv/config');
const PORT = process.env.port || 8080;

//<------- ROUTES ------->
const routes = require('./routes/sample')
app.use(routes)

app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})