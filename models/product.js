'use strict';
module.exports = function(sequelize, DataTypes) {
  var product = sequelize.define('product', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    art: DataTypes.BOOLEAN,
    product: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product;
};