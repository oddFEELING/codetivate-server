//--------------------------------------->  imports
const express = require('express');
const { PORT, MONGODB_KEY } = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');
const mongoose = require('mongoose');

//--------------------------------------->  Instances and middleware
const app = express(); //-->  app instance
app.use(cors()); //-->  cross origin resource sharing
app.use(bodyParser.json()); //-->  parse incoming data to JSON format

app.use('/', routes);
const usePort = process.env.PORT || PORT;

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
