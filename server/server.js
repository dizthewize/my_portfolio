const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const webRoutes = require('./routes/web.js');
const path = require('path');
const keys = require('../config/dev.js');
require('./models/User');
require('./auth/passport');

const PORT = process.env.PORT || 8080;

mongoose.connect(keys.mongoURI);

app.use(express.static('client/public'));

app.use(bodyParser.json());

app.use(webRoutes);

app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
