'use strict';
module.exports = (sequelize, DataTypes) => {
  var Addresses = sequelize.define('Addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    id_contacts: DataTypes.INTEGER
  }, {
  });
  Addresses.associate = models => {
    Addresses.belongsTo(models.Contacts,{
      foreignKey: 'id_contacts'
    });
  };
  return Addresses;
};



