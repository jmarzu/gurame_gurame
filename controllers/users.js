var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/', function(req, res) {
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);

      return res.send(users);
    });
  });

router.post('/', function(req, res) {
    // find the user first in case the email already exists
    User.findOne({ password: req.body.password }, function(err, user) {
      // if (user) return res.status(200).render('products.html');
      if (user) {
        res.render('products.html');
      } else {
        res.send('You are not Graeme');
      }
    });
  });

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);

    return res.send(user);
  });
});

module.exports = router;