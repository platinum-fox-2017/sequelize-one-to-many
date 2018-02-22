'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let addressesData = fs.readFileSync('./addresses.csv','utf8').trim().split('\n').map(val => val.split(',').slice(1));
    let addressesArr = [];
    for(let i in addressesData){
      addressesArr.push({
        street: addressesData[i][0],
        city: addressesData[i][1],
        zip_code: addressesData[i][2],
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('Addresses', addressesArr);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
