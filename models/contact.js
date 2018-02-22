'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    models.Contact.hasMany(models.Address, {foreignKey: 'id'})
  };
  return Contact;
};