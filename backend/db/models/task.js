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

  Task.add = async function ({   
    userId,
    singleStep,
    tags,
    lengthInMin,
    type,
    startDate,
    emptyDate,
    sizeInFlOz,
    mon,
    tues,
    wed,
    thur,
    fri,
    sat,
    sun,
    night,
    morning,
    activeIngredients}) {
      const task = await Task.create({
        userId,
        singleStep,
        tags,
        lengthInMin,
        type,
        startDate,
        emptyDate,
        sizeInFlOz,
        mon,
        tues,
        wed,
        thur,
        fri,
        sat,
        sun,
        night,
        morning,
        activeIngredients
      });
      return await Task.findByPk(task.id)
    };


  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Task;
};