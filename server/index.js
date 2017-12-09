const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const keys = require('../config/keys');

// image uploads
const multer     = require('multer');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/public'));
require('./models/project');

require('./routes/web')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Starts on ${PORT}`);
});
