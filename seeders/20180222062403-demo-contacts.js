'use strict';

const fs = require('fs')

const contactCsv = fs.readFileSync('contacts.csv', 'utf-8').trim().split('\n')
const addressesCsv = fs.readFileSync('addresses.csv', 'utf-8').trim().split('\n')
const arrData = []
function convertCsv() {
  let arr = []
  for (let i = 0; i < contactCsv.length; i++) {
    arr.push(String(contactCsv[i]).split(','))
  }
  
  for (let j = 0; j < contactCsv.length; j++) {
    let obj = {
      name: arr[j][1],
      email: arr[j][2],
      phone: arr[j][3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    arrData.push(obj)
  }
  return arrData
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', convertCsv(), {});
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
