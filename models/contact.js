'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function (models) {
    models.Contact.hasMany(models.Address, { foreignKey: 'contactId' })
    // associations can be defined here
  };
  return Contact;
};