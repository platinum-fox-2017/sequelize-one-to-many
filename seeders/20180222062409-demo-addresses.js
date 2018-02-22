'use strict';

const fs = require('fs')

const contactCsv = fs.readFileSync('contacts.csv', 'utf-8').trim().split('\n')
const addressesCsv = fs.readFileSync('addresses.csv', 'utf-8').trim().split('\n')
const arrData = []
function convertCsv() {
  let arr = []
  for (let i = 0; i < addressesCsv.length; i++) {
    arr.push(String(addressesCsv[i]).split(','))
  }

  for (let j = 0; j < addressesCsv.length; j++) {
    let obj = {
      street: arr[j][1],
      city: arr[j][2],
      zip_code: arr[j][3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    arrData.push(obj)
  }
  return arrData
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', convertCsv(), {});
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
