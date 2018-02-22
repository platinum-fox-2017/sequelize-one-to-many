'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    ContactId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.Contact);
  };
  return Address;
};