'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let addressCsv = fs.readFileSync('addresses.csv','utf8');
    addressCsv = addressCsv.split('\n');
    let arrayAddress  = [];
    for (var i = 0; i < addressCsv.length - 1; i++) {
      let column = addressCsv[i].split(',');
      arrayAddress.push({
        zipCode: column[3],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    console.log(arrayAddress);
    return queryInterface.bulkInsert('Addresses', arrayAddress, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
