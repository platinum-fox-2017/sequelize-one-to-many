'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $or: Op.or,
}
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Address.associate = function(db) {
    // associations can be defined here
    Address.belongsTo(db.Contact /*{foreignKey: 'ContactId'}*/)
  };
  Address.north_area = function(db){
    return Address.findAll({
      where:{
        zip_code: {[Op.lt] : '50000'}
      }
    });
  }
  Address.south_area = function(db){
    return Address.findAll({
      where:{
        zip_code: {[Op.gt] : '50000'}
      }
    });
  }
  // instance method
  Address.prototype.full_address = function(callback){
    let props = this.dataValues;
    callback(props);
  };



  return Address;
};
