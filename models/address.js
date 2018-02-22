'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    Street: DataTypes.STRING,
    City: DataTypes.STRING,
    ZipCode: DataTypes.STRING,
    ContactId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    models.Address.belongsTo(models.Contact, {foreignKey: 'ContactId'})
  };
  return Address;
};