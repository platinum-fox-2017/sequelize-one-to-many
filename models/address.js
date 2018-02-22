'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.Contact, {
      foreignKey: 'id_contact'
    })

  };
  return Address;
};
