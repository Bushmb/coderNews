var express = require('express');
var router = express.Router();

var passportTwitter = require('../auth/twitter');


router.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/auth/twitter', passportTwitter.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    console.log('logged in with twitter');
    // res.send('logged in with twitter');
    res.redirect('/dashboard');
  });

module.exports = router;
