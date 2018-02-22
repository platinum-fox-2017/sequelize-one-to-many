'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let contactCsv = fs.readFileSync('contacts.csv','utf8');
    contactCsv = contactCsv.split('\n');
    let arrayContact  = [];
    for (var i = 0; i < contactCsv.length - 1; i++) {
      let column = contactCsv[i].split(',');
      arrayContact.push({
        name:column[1],
        email:column[2],
        phone: column[3],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Contacts', arrayContact, {});
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
