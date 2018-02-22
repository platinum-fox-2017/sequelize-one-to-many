'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    id_contact: DataTypes.STRING
  },);

  Address.associate = function (models) {
    Address.belongsTo(models.Contact,{foreignKey:'id_contact'})
  };

  Address.prototype.fullAddress = function() {
    let full_Address = `Alamat lengkap : ${street} - ${city} (${zip_code})`
    return full_Address
  }
  return Address;
};