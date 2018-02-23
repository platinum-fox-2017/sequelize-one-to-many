'use strict';
let Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});

  Address.prototype.full_address = function() {
      console.log(`Alamat Lengkap : ${this.street} - ${this.city} - ${this.zip_code}`);
  }

  Address.findNorthArea = function() {
      return new Promise ((resolve,reject) => {
          Address.findAll({
              raw:true,
              where : {zip_code: {[Op.lt] : '5000'} }
          })
          .then (address => {
              resolve(address);
          });
      });
  }

  Address.findSouthArea = function() {
      return new Promise ((resolve,reject) => {
          Address.findAll({
              raw:true,
              where : {zip_code: {[Op.gt] : '5000'} }
          })
          .then (address => {
              resolve(address);
          });
      });
  }


  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.Contact)
  };
  return Address;
};
