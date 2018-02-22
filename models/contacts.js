'use strict';
module.exports = (sequelize, DataTypes) => {
  var contacts = sequelize.define('contacts', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
    contacts.associate = function(models) {
      contacts.hasMany(models.addresses, {foreignKey: 'contactID'})
  };
  return contacts;
};
