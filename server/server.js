const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser =  require('body-parser');
const webRoutes = require('./routes/web.js');
const path = require('path');
require('./models/User');
require('./auth/passport');

const PORT = process.env.PORT || 8080;

app.use(express.static('client/public'));

app.use(bodyParser.json());

app.use(webRoutes);

app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
