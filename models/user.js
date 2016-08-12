'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      authenticate: function(user, password, callback) {
        this.findOne({ firstName: 'Graeme' })
          .then(function(user) {
            bcrypt.compare(password, user.password, function(err, bool) {
              callback(null, bool)
            });
        });

      }
    },
    hooks: {
      beforeCreate: function(user, options, callback) {
        console.log(user.password);
        if(user.password) {
          bcrypt.hash(user.password, 10, function(err, hash) {
            if(err){return callback(err)};
            user.password = hash;
            callback(null, user)
          });
        } else {
          callback(null, user);
        }
      }
    }
  });
  return user;
};