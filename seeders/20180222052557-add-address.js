'use strict';
const fs = require('fs')

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
    const dataFile = fs.readFileSync('./addresses.csv', 'utf-8').trim().split('\n')
    const dataAddress = []

    for (let index = 0; index < dataFile.length; index++) {
      dataAddress.push(
        {
          street: dataFile[index].split(',')[1],
          city: dataFile[index].split(',')[2],
          zip_code: dataFile[index].split(',')[3],
          createdAt: new Date(),
          updatedAt: new Date()
        })
    }
    return queryInterface.bulkInsert('Addresses', dataAddress, {});
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
