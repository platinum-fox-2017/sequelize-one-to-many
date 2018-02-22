'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    ContactId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
      Address.belongsTo(models.Contact,{foreignKey:'ContactId'});
  };
  return Address;
};