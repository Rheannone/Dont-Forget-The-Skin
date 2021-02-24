'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    userId: DataTypes.INTEGER,
    singleStep: DataTypes.STRING,
    tags: DataTypes.STRING,
    lengthInMin: DataTypes.INTEGER,
    type: DataTypes.STRING,
    startDate: DataTypes.DATE,
    emptyDate: DataTypes.DATE,
    sizeInFlOz: DataTypes.INTEGER,
    mon: DataTypes.BOOLEAN,
    tues: DataTypes.BOOLEAN,
    wed: DataTypes.BOOLEAN,
    thur: DataTypes.BOOLEAN,
    fri: DataTypes.BOOLEAN,
    sat: DataTypes.BOOLEAN,
    sun: DataTypes.BOOLEAN,
    night: DataTypes.BOOLEAN,
    morning: DataTypes.BOOLEAN,
    activeIngredients: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Task;
};