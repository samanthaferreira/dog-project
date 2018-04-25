'use strict';
const express = require('express');
const router = express.Router();

const Dog = require('../models/dog');

router.get('/', (req, res, next) => {
  Dog.find({})
    .then((result) => {
      const data = {
        dogs: result
      };
      res.render('dog/dog-list', data);
    })
    .catch(next);
});

router.get('/:dogId', function (req, res, next) {
  if (!req.session.currentUser) {
    res.redirect('/auth/login');
    return;
  }
  Dog.findById(req.params.dogId)
    .then((result) => {
      const data = {
        dogs: result
      };
      res.render('dog/dog-more', data);
    })
    .catch(next);
});

module.exports = router;
