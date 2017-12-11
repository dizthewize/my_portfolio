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
require('./models/project');

require('./routes/web')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
