'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
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
    let temp = `Alamat lengkap : ${street} - ${city} (${zip_code})`
    return temp
  };
  address.north_area = function(){
    return address.findAll({
      where:{
        zip_code :{[Op.lt]:50000}
      }
    })

  }
  address.south_area = function(){
    return address.findAll({
      where:{
        zip_code:{[Op.gt]:50000}
      }
    })

  }

  return address;
};