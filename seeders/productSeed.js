'use strict';

module.exports = function (db, types, chance) {

    var model = db.models.Products,
        models = [],
        count = 10;

    function generateProduct(){
        var user = {
            title: chance.title(),
            image: chance.image(),
            price: chance.price(),
            
        };
       return user;
    }

    for(var i = 0; i < count; i++){
        models.push(generateUser());
    }

    // create the rows using our generated models.
    return model.bulkCreate(models);

};