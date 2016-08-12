'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('products', [
      { title: 'DedElectric T-shirts',
        price: 50,
        image: '/img/dedShirt.jpg',
        description: 'Comes in Men\'s and Women\'sizes',
        art: false,
        product: true,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'DedElectric Hoodie',
        price: 50,
        image: '/img/dedSweatShirt.jpg',
        description: 'Comes in Men\'s and Women\'sizes',
        art: false,
        product: true,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'DedElectric Album',
        price: 12,
        image: '/img/dedCD.jpg',
        description: 'DedElectrics self-titled debut Album',
        art: false,
        product: true,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ]); 
  },

  down: function (queryInterface, Sequelize) {
    
  }
};
