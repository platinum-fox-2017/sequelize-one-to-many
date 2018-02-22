'use strict';
module.exports = (sequelize, DataTypes) => {
  var address = sequelize.define('address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  })
  address.associate = function (models) {
    address.belongsTo(models.contact,{foreignKey:'id_contact'})
  };
  return address;
};