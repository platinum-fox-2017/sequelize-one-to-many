'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data_csv = fs.readFileSync('./addresses.csv','utf8').trim()
    const new_csv = data_csv.split('\n')
    let dataArr = []
    for (var i = 0; i < new_csv.length; i++) {
      let obj = {}
      let arr_csv = new_csv[i].split(',')
      obj.street = arr_csv[1]
      obj.city = arr_csv[2]
      obj.zip_code = arr_csv[3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      dataArr.push(obj)
    }
    return queryInterface.bulkInsert('Addresses', dataArr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
