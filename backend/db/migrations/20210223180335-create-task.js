'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      singleStep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      lengthInMin: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      emptyDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      sizeInFlOz: {
        type: Sequelize.INTEGER
      },
      mon: {
        type: Sequelize.BOOLEAN
      },
      tues: {
        type: Sequelize.BOOLEAN
      },
      wed: {
        type: Sequelize.BOOLEAN
      },
      thur: {
        type: Sequelize.BOOLEAN
      },
      fri: {
        type: Sequelize.BOOLEAN
      },
      sat: {
        type: Sequelize.BOOLEAN
      },
      sun: {
        type: Sequelize.BOOLEAN
      },
      night: {
        type: Sequelize.BOOLEAN
      },
      morning: {
        type: Sequelize.BOOLEAN
      },
      activeIngredients: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};