'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  })
  contact.associate = function (models) {
    contact.hasMany(models.address,{foreignKey:'id_contact'})
};
  return contact;
};