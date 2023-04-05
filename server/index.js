const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./src/db/mongoose/mongoose')
// Middleware
const app = express();

// Middleware
app.use(bodyParser.json());

//route

const router=require('./route/App')
app.use(cors()); // enable cors for all routes
app.use('/',router)



// Start server
app.listen(5000, () => {
    console.log('Server started on port 5000');
  });

module.exports = app;


//npm run dev  or npm start