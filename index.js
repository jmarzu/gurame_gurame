var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./models');
var isLoggedIn = require('./middleware/isLoggedIn');
var User = require('./models/user');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));

// app.use('/products', require('./controllers/products'));
// app.use('/users', require('./controllers/users'));


app.get('/users', function(req, res) {
    db.user.find(function(err, users) {
      if (err) return res.status(500).send(err);

      return res.send(users);
    });
  });

app.post('/users', function(req, res) {
    console.log('hit the post route');
    console.log(req.body.password);
    console.log(typeof req.body.password);
    // find the user first in case the email already exists
    db.user.findOne({ password: req.body.password }).then(function(user) {
      // if (user) return res.status(200).render('products.html');
      console.log(user)
      if (user) {
        res.send('Success').status(200)
        // res.sendFile('app/views/products.html');
      } else {
        res.send('You are not Graeme').status(403);
      }
    });
  });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // res.render('public/views/main.html');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server