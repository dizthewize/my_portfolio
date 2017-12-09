const mongoose = require('mongoose');
const multer   = require('multer');
const Project  = mongoose.model('projects');
const path = require('path');
const keys = require('../../config/keys');
const nodemailer = require('nodemailer');

module.exports = app => {
  app.get('/api/projects', (req, res) => {
    Project.find({}, (err, projects) => {
      let projectList = {};

      projects.forEach((project) => {
        projectList[project.id] = project;
      });

      res.send(projectList);
    });
  });

  app.post('/api/projects/add', (req, res) => {
    const storage = multer.diskStorage({
      // TODO: Change path after build setup
      destination: './client/public/img/',
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });

    const upload = multer({
      storage: storage
    }).single('imageFile');

    upload(req, res, (err) => {
      if (err) {
        console.log(err, 'project not saved');
      } else {
        filename = req.file.filename;
        const newProject = new Project({
          title: req.body.title,
          description: req.body.description,
          tech: req.body.tech,
          type: req.body.type,
          gridClass: req.body.gridClass,
          liveUrl: req.body.liveUrl,
          imageFile: filename
        });

        newProject.save()
          .then(project => {
            console.log('new project saved');
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  });

  app.post('/api/contact/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: keys.outlookEmail, // generated ethereal user
            pass: keys.outlookPassword  // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Portfolio Contact" <martez_conner@outlook.com>', // sender address
        to: 'martez.connerjr@gmail.com', // list of receivers
        subject: 'Job Inquiry', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
};
