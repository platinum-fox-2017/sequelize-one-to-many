'use strict';
module.exports = (sequelize, DataTypes) => {
  var addresses = sequelize.define('addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    contactID: DataTypes.INTEGER
  }, {});
    addresses.associate = function(models) {
      addresses.belongsTo(models.contacts, {foreignKey: 'contactID'})
  };
  return addresses;
};
