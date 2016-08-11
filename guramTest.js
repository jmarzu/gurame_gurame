var db = require('./models');

console.log('this is a Graeme Test');

db.user.create({
  firstName: 'Graeme',
  lastName: 'Smith',
  password: 'password',
  admin: true
}).then(function(user) {
  console.log(user.firstName, user.lastName);
}).catch(function(error) {
  console.log(error.message);
});

db.sequelize.query('SELECT * FROM user;', {
  model: db.user
}).then(function(users) {
  console.log(users);
});