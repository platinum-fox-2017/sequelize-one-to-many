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
    const dataFile = fs.readFileSync('./contacts.csv', 'utf-8').trim().split('\n')
    const dataContacts = []

    for (let index = 0; index < dataFile.length; index++) {
      dataContacts.push(
        {
          name: dataFile[index].split(',')[1],
          email: dataFile[index].split(',')[2],
          phone: dataFile[index].split(',')[3],
          createdAt: new Date(),
          updatedAt: new Date()
        })
    }

    return queryInterface.bulkInsert('Contacts', dataContacts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Contacts', null, {});

  }
};
