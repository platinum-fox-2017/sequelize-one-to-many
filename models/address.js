'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.INTEGER,
    zip_code: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.Contact,{foreignKey:'ContactsId'})
  };
  return Address;
};