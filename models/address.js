'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    ContactId: DataTypes.INTEGER
  }, {});

  Address.associate = function(models) {
    Address.belongsTo(models.Contact);
  };

  Address.prototype.fullAddress = function() {
  	return `Alamat lengkap : ${this.street} - ${this.city} (${this.zipCode} )`;
  };

  Address.northArea = function () {
  	return new Promise((resolve, reject) => {
  		Address.findAll({
  			where: { zipCode: { [sequelize.Op.lt]: ' 50000' } },
  			raw: true
  		}).then(rows => resolve(rows)).catch(err => reject(err));
  	})
  }

  Address.southArea = function () {
  	return new Promise((resolve, reject) => {
  		Address.findAll({
  			where: { zipCode: { [sequelize.Op.gte]: ' 50000' } },
  			raw: true
  		}).then(rows => resolve(rows)).catch(err => reject(err));
  	})
  }

  return Address;
};