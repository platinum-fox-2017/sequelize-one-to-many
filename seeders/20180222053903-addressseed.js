'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {

    let dataCsv = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\n')
    let arrOfObject = []
    for(let i=0; i<dataCsv.length; i++){
      let dataSPlit = dataCsv[i].toString().split(',')
      let objAddress = {}
      objAddress.street = dataSPlit[1],
      objAddress.city = dataSPlit[2],
      objAddress.zip_code = dataSPlit[3],
      objAddress.createdAt = new Date(),
      objAddress.updatedAt = new Date()
      arrOfObject.push(objAddress)
    } 

   return queryInterface.bulkInsert('Addresses', arrOfObject, {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};