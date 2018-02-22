'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER
  });
  Address.associate = models => {
    Address.belongsTo ( models.Contact, {
      foreignKey: 'contact_id'
    })
  }
  Address.prototype.full_address = models => {
    let full_address = `Alamat lengkap : [${this.street}] - [${this.city}] ([${this.zip_code}])`
    return full_address
  }
  return Address
};
