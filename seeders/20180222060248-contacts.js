'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let file = fs.readFileSync('./contacts.csv', 'utf8').trim()
    let data = file.split('\n')
    let dataArr = []
    for(let i=0; i<data.length; i++){
      let dataSplit = data[i].split(',')
      let obj = {
        name : dataSplit[1],
        email : dataSplit[2],
        phone : dataSplit[3],
        createdAt : new Date(),
        updatedAt : new Date(),
      }
      dataArr.push(obj)
    }
    return queryInterface.bulkInsert('contacts', dataArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
