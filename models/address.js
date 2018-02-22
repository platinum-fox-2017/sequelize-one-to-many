'use strict';
let Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  
  Address.associate = function(models) {
    Address.belongsTo(models.Contacts);
  };

  Address.prototype.fullAddress = function() {
    return this.street + "-" + this.city + "(" + this.zip_code + ")"
  }

  Address.findNorthArea = function() {
    return new Promise(function(resolve,reject){
      Address.findAll({
        where : {zip_code : { [Op.lt] : '50000' } }
        ,raw:true
      })
      .then(address => {
        resolve(address);
      })
      .catch(err => {
        reject(err);
      })
    })
  }

  Address.findSouthArea = function() {
    return new Promise(function(resolve,reject){
      Address.findAll({
        where : {zip_code : { [Op.gt] : '50000' } }
        ,raw:true
      })
      .then(address => {
        resolve(address);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
  return Address;
};