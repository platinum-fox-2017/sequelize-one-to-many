'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(db) {
    // associations can be defined here
    // one contact to many addresses
    Contact.hasMany(db.Address, {as: 'Houses'})
  };
  return Contact;
};
