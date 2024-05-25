'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  User.associate = function(models) {
    User.hasMany(models.Data, { foreignKey: 'userId', as: 'data' });
  };
  
  return User;
};

