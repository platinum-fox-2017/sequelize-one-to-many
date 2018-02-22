'use strict';
module.exports = (sequelize, DataTypes) => {
  var Addresses = sequelize.define('Addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    id_contact: DataTypes.INTEGER
  }, {});
  Addresses.associate = function(models) {
    Addresses.belongsTo(models.Contacts,{foreignKey:"id_contact"})
  };
  return Addresses;
};
