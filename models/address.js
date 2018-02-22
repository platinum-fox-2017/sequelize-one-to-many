'use strict';
module.exports = (sequelize, DataTypes) => {
  let address = sequelize.define('address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    id_contact: DataTypes.INTEGER
  });
  address.associate = function(models){
    address.belongsTo(models.contact,{foreignKey: 'id_contact'})
  }

  return address;
};