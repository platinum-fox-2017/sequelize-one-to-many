'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contacts = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contacts.associate = function(models) {
    Contacts.hasMany(models.Addresses,{foreignKey:"id_contact"})
  };
  return Contacts;
};
