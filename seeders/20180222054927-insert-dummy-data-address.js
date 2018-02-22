'use strict';

const fs = require('fs');
const path = './addresses.csv';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let dataStr = fs.readFileSync(path, 'utf8').trim().split('\r\n');
    
    dataStr.forEach(row => {
      let element = row.split(',');
      data.push({
        street: element[1],
        city: element[2],
        zipCode: element[3],
        createdAt: new Date(),
        updatedAt: new Date()
       });
    });

    return queryInterface.bulkInsert('Addresses', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
