//--------------------------------------->  imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');
const mongoose = require('mongoose');

//--------------------------------------->  Instances and middleware
const app = express(); //-->  app instance
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
); //-->  cross origin resource sharing
app.use(bodyParser.json()); //-->  parse incoming data to JSON format

app.use('/', routes);

//-->  try connect to database
try {
  mongoose.connect(process.env.MONGODB_KEY);
} catch (err) {
  console.log(`Error connecting to database ${err}`);
}

//--------------------------------------->  start express app
app.listen(process.env.PORT || 3001, () => {
  console.log(`Express server started`);
});
