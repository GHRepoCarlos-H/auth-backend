'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    dataField: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  
  Data.associate = function(models) {
    Data.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  return Data;
};
