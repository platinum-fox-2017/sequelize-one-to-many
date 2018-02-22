'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    contactId: DataTypes.INTEGER
  }, {});
  Address.associate = function (models) {
    // associations can be defined here
    models.Address.belongsTo(models.Contact, { foreignKey: 'contactId' })
  };
  return Address;
};