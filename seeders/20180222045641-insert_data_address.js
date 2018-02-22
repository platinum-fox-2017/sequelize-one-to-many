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

    let data = fs.readFileSync('addresses.csv', 'utf-8');
    let getData = data.trim().split('\n')
    let arrData = new Array()

    for (let i = 0; i < getData.length; i++) {
      let splitData = getData[i].split(',');
      arrData.push([splitData[0], splitData[1], splitData[2], splitData[3], splitData[4]])
    }

    let arrRes = new Array()

    for (let i = 0; i < arrData.length; i++) {
      let arrObj = {
        street: arrData[i][1],
        city: arrData[i][2],
        zip_code: arrData[i][3],
        id_contact: arrData[i][4],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      arrRes.push(arrObj)
    }

    return queryInterface.bulkInsert('Addresses', arrRes, {});

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
