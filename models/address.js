'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    id_contact: DataTypes.INTEGER
  }, {});
  Address.associate= function(models) {
    Address.belongsTo(models.Contact, {
      foreignKey: 'id_contact'
    })
  }
  return Address;
};
