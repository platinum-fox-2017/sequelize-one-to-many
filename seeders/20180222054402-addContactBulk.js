'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let contacts = fs.readFileSync('./contacts.csv', 'utf8').trim().split('\r\n')
    // console.log(contacts)
    let arrContacts = []
    for(let i = 0; i < contacts.length; i++) {
      let contact = contacts[i].split(',')
      // console.log(contact)
      let objContact = {}
      objContact.name = contact[1]
      objContact.email = contact[2]
      objContact.phone = contact[3]
      objContact.createdAt = new Date()
      objContact.updatedAt = new Date()
      arrContacts.push(objContact)
    }
    return queryInterface.bulkInsert('Contacts', arrContacts, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
