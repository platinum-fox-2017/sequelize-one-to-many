'use strict';
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    ContactId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.Contact);
  };
  Address.northArea = function (models) {
    return new Promise(function(resolve, reject) {
      models.Address.all({ where: {'zipCode': { [Op.lt]: 50000 } } ,raw:true}).then((address) => {
        resolve(address);
      });
    });
  }
  Address.southArea = function (models) {
    return new Promise(function(resolve, reject) {
      models.Address.all({ where: {'zipCode': { [Op.gt]: 50000 } } ,raw:true}).then((address) => {
        resolve(address);
      });
    });
  }
  Address.prototype.fullAddress = function () {
    return `Alamat Lengkap : ${this.street} - ${this.city} (${this.zipCode})`;
  };
  return Address;
};
