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
  };
  address.prototype.full_address = function (street,city,zip_code) {
    console.log(`Alamat lengkap : ${street} - ${city} (${zip_code})`)
  };
  address.north_area = function(dataAll){

  }
  address.south_area = function(){

  }

  return address;
};