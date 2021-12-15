//--------------------------------------->  imports
const express = require('express');
const { PORT, MONGODB_KEY } = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');
const mongoose = require('mongoose');
const { calculateObjectSize } = require('bson');

//--------------------------------------->  Instances and middleware
const app = express(); //-->  app instance
app.use(cors()); //-->  cross origin resource sharing
app.use(bodyParser.json()); //-->  parse incoming data to JSON format

app.use('/', routes);
const usePort = PORT || process.env.PORT;

//-->  try connect to database
try {
  mongoose.connect(MONGODB_KEY);
} catch (err) {
  console.log(`Error connecting to database ${err}`);
}

//--------------------------------------->  start express app
app.listen(usePort, () => {
  console.log(`Express server started on PORT: ${PORT}`);
});

module.exports = app;
