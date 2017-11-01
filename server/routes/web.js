const express = require('express');
const router = express.Router();
const sendEmail = require('../auth/mailer');
const passport = require('passport');
var window = this;

// const pagesController = require('../controllers/pagesController.js');
// const projectsController = require('../controllers/projectsController.js');

// router.get('/', pagesController.homePage);

// router.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email']
//   })
// );
//
// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google'),
//   (req, res) => {
//     res.redirect('/surveys');
//   }
// );
//
// router.get('/api/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
//
// router.get('/api/current_user', (req, res) => {
//   res.send(req.user);
// });

router.post('/contact/send', async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body
    let message = {
      from: `${name} <${email}>`,
      subject: `${company}`,
      phone: `${phone}`,
      html: `<p>${message}</p>`
    }
    await sendEmail(Message);

    // res.redirect('/contact/success');
    console.log(message);
  } catch (error) {
    // res.redirect('/contact/error');
    console.log(error);
  }
});

// router.get('/projects', projectsController.index);

module.exports = router;
