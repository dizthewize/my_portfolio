const express = require('express');

const pagesController = {};

pagesController.homePage = (req, res) => {
  const title = 'Martez Conner'
  res.render('index', {
    title: title
  });
}

module.exports = pagesController;
