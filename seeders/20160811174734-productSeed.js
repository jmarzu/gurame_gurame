'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('products', [
      { title: 'Bird',
        price: 50,
        image: '/img/bird.jpg',
        description: 'It\'s a bird',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Brown Bird',
        price: 50,
        image: '/img/brown_bird.jpg',
        description: 'A brown bird',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Couch and TV',
        price: 50,
        image: '/img/couch_and_tv.jpg',
        description: 'Couch and TV',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Guitar and Drums',
        price: 50,
        image: '/img/daymonAndBen1.jpg',
        description: 'Ded Jams',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Death Star Route',
        price: 50,
        image: '/img/death_star_route.jpg',
        description: 'Flying to the Death Star',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Studio Time',
        price: 50,
        image: '/img/dedRecording.jpg',
        description: 'The Ded at Maple Shade',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Frontside Air',
        price: 50,
        image: '/img/frontside_air.jpg',
        description: 'Frontside Air',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Release the Ghost',
        price: 50,
        image: '/img/ghost_release.jpg',
        description: 'Release the Ghost',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Long Hair',
        price: 50,
        image: '/img/long_hair.jpg',
        description: 'Look at that hair',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Mustache',
        price: 50,
        image: '/img/mustache_man.jpg',
        description: 'Like Tom Selleck',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Drummer Couch',
        price: 50,
        image: '/img/on_the_couch.jpg',
        description: 'Drummer Couch',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Open Country',
        price: 50,
        image: '/img/open_country.jpg',
        description: 'Open Country',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Sea of Skulls',
        price: 50,
        image: '/img/sea_of_skulls.jpg',
        description: 'Sea of Skulls',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Window Window on the wall',
        price: 50,
        image: '/img/window_window.jpg',
        description: 'Open Country',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { title: 'Ded Fish',
        price: 50,
        image: '/img/dedelectricFish.jpg',
        description: 'Ded Fish',
        art: true,
        product: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ]); 
  },

  down: function (queryInterface, Sequelize) {
    
  }
};
