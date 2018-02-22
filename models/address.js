'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    id_contact: DataTypes.INTEGER
  }, {});

  Address.associate = function (models) {
    Address.belongsTo(models.Contact, { foreignKey: 'id_contact' })
  }

  //Instance Method
  Address.prototype.full_address = function () {
    console.log(`Alamat Lengkap : ${this.street} - ${this.city} - ${this.zip_code}`)
  }

return Address;
};