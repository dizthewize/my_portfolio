const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => {
  res.send('project page');
}

module.exports = projectsController;
