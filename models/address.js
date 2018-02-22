'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    contactId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.Contact, {foreignKey: 'contactId'})
  };

  Address.prototype.full_address = function() {
    return `Alamat lengkap : [${this.street}] - [${this.city}] ([${this.zip_code}])`;
  };
  return Address;
};