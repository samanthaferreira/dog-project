'use strict'

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

const bcryptSalt = 10

// get users listing
router.get('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/dog-list')
    return
  }

  const data = {
    messages: req.flash('signup')
  }
  res.render('auth/signup', data)
})

router.post('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/dog-list')
    return
  }

  // @todo chec if username or password are missing, if so redirect back to signup with appropriate flash message
  if (!req.body.username || req.body.password) {
    req.flash('missing', 'username or password missing')
    res.redirect('/auth/signup')
  }
  // if, flash, redirect and return

  User.findOne({username: req.body.username})
    .then((result) => {
      if (result) {
        req.flash('signup', 'username already taken')
        res.redirect('/auth/signup')
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(req.body.password, salt)

      const newUser = new User({
        username: req.body.username,
        password: hashPass
      })

      newUser.save() // once new user is saved, store in the session and send to dog-list
        .then((user) => {
          req.session.currentUser = newUser
          res.redirect('/dog-list')
        })
        .catch(next)
    })
    .catch(next)
})

module.exports = router
