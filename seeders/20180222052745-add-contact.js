'use strict';
const fs = require('fs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    const data_csv = fs.readFileSync('./contacts.csv','utf8').trim()
    const new_csv = data_csv.split('\n')
    let dataArr = []
    for (var i = 0; i < new_csv.length; i++) {
      let obj = {}
      let arr_csv = new_csv[i].split(',')
      obj.name = arr_csv[1]
      obj.email = arr_csv[2]
      obj.phone = arr_csv[3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      dataArr.push(obj)
    }
    return queryInterface.bulkInsert('Contacts', dataArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};

;
