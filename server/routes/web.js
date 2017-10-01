const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController.js');
const projectsController = require('../controllers/projectsController.js');

router.get('/', pagesController.homePage);

router.get('/projects', projectsController.index);

module.exports = router;
