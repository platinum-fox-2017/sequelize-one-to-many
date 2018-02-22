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

    let contactsData = fs.readFileSync('./contacts.csv','utf8').trim().split('\n').map(val => val.split(',').slice(1));
    let contactsArr = [];
    for(let i in contactsData) {
      contactsArr.push({
        name:contactsData[i][0],
        email:contactsData[i][1],
        phone:contactsData[i][2],
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('Contacts', contactsArr);
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
