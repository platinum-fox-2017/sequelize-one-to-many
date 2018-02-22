'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let addresses = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\r\n')
    let arrAddresses = []
    for(let i = 0; i < addresses.length; i++) {
      let address = addresses[i].split(',')
      let objaddress = {}
      objaddress.street = address[1]
      objaddress.city = address[2]
      objaddress.zip_code = address[3]
      objaddress.createdAt = new Date()
      objaddress.updatedAt = new Date()
      arrAddresses.push(objaddress)
    }
    return queryInterface.bulkInsert('Addresses', arrAddresses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
