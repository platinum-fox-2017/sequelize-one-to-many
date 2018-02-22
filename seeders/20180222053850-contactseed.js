'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let dataCsv = fs.readFileSync('./contacts.csv', 'utf8').trim().split('\n')
    let arrOfObject = []
    for(let i=0; i<dataCsv.length; i++){
      let dataSPlit = dataCsv[i].toString().split(',')
      let objContact = {}
      objContact.name = dataSPlit[1],
      objContact.email = dataSPlit[2],
      objContact.phone = dataSPlit[3],
      objContact.createdAt = new Date(),
      objContact.updatedAt = new Date()
      arrOfObject.push(objContact)
    }

    return queryInterface.bulkInsert('Contacts', arrOfObject, {});  
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