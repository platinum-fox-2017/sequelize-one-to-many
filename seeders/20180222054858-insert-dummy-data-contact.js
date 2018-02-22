'use strict';

const fs = require('fs');
const path = './contacts.csv';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let dataStr = fs.readFileSync(path, 'utf8').trim().split('\r\n');
    
    dataStr.forEach(row => {
      let element = row.split(',');
      data.push({
        name: element[1],
        email: element[2],
        phone: element[3],
        createdAt: new Date(),
        updatedAt: new Date()
       });
    });

    return queryInterface.bulkInsert('Contacts', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
