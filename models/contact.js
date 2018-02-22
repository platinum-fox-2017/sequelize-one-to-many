'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    Contact.hasMany(models.Address,{foreignKey: 'contactId'});
  };
  return Contact;
};