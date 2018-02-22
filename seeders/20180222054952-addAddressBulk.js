'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let addresses = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\r\n')
    // console.log(addresses)
    let arrAddresses = []
    for(let i = 0; i < addresses.length; i++) {
      let address = addresses[i].split(',')
      // console.log(address)
      let objaddress = {}
      objaddress.street = address[1]
      objaddress.city = address[2]
      objaddress.zip_code = address[3]
      objaddress.createdAt = new Date()
      objaddress.updatedAt = new Date()
      arrAddresses.push(objaddress)
    }
    return queryInterface.bulkInsert('Addresses', arrAddresses, {});
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
    return queryInterface.bulkDelete('Addresses', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
