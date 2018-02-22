'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let contacts = fs.readFileSync('./contacts.csv', 'utf8').trim().split('\r\n')
    let arrContacts = []
    for(let i = 0; i < contacts.length; i++) {
      let contact = contacts[i].split(',')
      let objContact = {}
      objContact.name = contact[1]
      objContact.email = contact[2]
      objContact.phone = contact[3]
      objContact.createdAt = new Date()
      objContact.updatedAt = new Date()
      arrContacts.push(objContact)
    }
    return queryInterface.bulkInsert('Contacts', arrContacts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
