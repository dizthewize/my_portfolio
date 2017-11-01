const nodemailer = require('nodemailer');

import config from '../../config/mailerAccess';
//TODO: remember to change mailerAccess to keys.js

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});
