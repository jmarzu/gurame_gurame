var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./models');
var isLoggedIn = require('./middleware/isLoggedIn');
var User = require('./models/user');
var Product = require('./models/product');
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
    // console.log('hit the post route');
    // console.log(req.body.password);
    // console.log(typeof req.body.password);
    db.user.authenticate(null, req.body.password, function(err, bool){
      console.log('1234 ', bool);
      res.send(bool);
    });  
  });

app.get('/api/products', function(req, res) {
  db.product.findAll({
    where: {
      product: true
    }
  }).then(function success(data) {
    console.log(data);
    res.send(data);
  }).then(function error(data) {
    console.log(data);
  }); 

});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // res.render('public/views/main.html');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server