'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tasks', [{
        userId: 4,
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

      },
      {
        userId: 2,
        singleStep: "GlamGlow ProBiotic Recovery Berry Mask",
        tags: "mask, glamglow, treatment, evening, repair",
        lengthInMin: 10,
        type: "treatment",
        startDate: null,
        emptyDate:null,
        sizeInFlOz: 4,
        mon: false,
        tues: false,
        wed: true,
        thur: false,
        fri: false,
        sat: false,
        sun: false,
        night: true,
        morning: false,
        activeIngredients:null ,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 4,
        singleStep: "GlamGlow ProBiotic Recovery Berry Mask",
        tags: "mask, glamglow, treatment, evening, repair",
        lengthInMin: 10,
        type: "treatment",
        startDate: null,
        emptyDate:null,
        sizeInFlOz: 4,
        mon: false,
        tues: false,
        wed: true,
        thur: false,
        fri: false,
        sat: false,
        sun: false,
        night: true,
        morning: false,
        activeIngredients:null ,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 1,
        singleStep: "dr. brandt Light Years Away Brightening Eye Cream",
        tags: "dr.brandt, eye cream, anti-aging",
        lengthInMin: 1,
        type: "eye-cream",
        startDate: null,
        emptyDate:null,
        sizeInFlOz: 2,
        mon: true,
        tues: true,
        wed: true,
        thur: true,
        fri: true,
        sat: true,
        sun: true,
        night: true,
        morning: false,
        activeIngredients:"retinol" ,
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tasks', null, {});
    
  }
};