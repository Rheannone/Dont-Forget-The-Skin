'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tasks', [{
        userId: 3,
        singleStep: "Estee Lauder Nighttime Repair",
        tags: "serum, Estee Lauder, evening, repair",
        lengthInMin: 1,
        type: "serum",
        startDate: null,
        emptyDate:null,
        sizeInFlOz: 3,
        mon: true,
        tues: true,
        wed: true,
        thur: true,
        fri: true,
        sat: true,
        sun: true,
        night: true,
        morning: false,
        activeIngredients: "snail mucin, love",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 3,
        singleStep: "Estee Lauder Nighttime Repair",
        tags: "serum, Estee Lauder, evening, repair",
        lengthInMin: 1,
        type: "serum",
        startDate: null,
        emptyDate:null,
        sizeInFlOz: 3,
        mon: true,
        tues: true,
        wed: true,
        thur: true,
        fri: true,
        sat: true,
        sun: true,
        night: true,
        morning: false,
        activeIngredients: "snail mucin, love",
        createdAt: new Date(),
        updatedAt: new Date(),

      }], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tasks', null, {});
    
  }
};
