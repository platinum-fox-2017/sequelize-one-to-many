'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let file = fs.readFileSync('./addresses.csv', 'utf8').trim()
    let data = file.split('\n')
    let dataArr = []
    for(let i=0; i<data.length; i++){
      let dataSplit = data[i].split(',')
      let obj = {
        street : dataSplit[1],
        city : dataSplit[2],
        zip_code : dataSplit[3],
        createdAt : new Date(),
        updatedAt : new Date(),
      }
      dataArr.push(obj)
    }
    return queryInterface.bulkInsert('addresses', dataArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};
