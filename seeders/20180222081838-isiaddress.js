'use strict';
const fs = require('fs')

let data = fs.readFileSync('addresses.csv','UTF-8')
// console.log(data);
let arr = data.split('\n')
let read = []
for(let i = 0;i<arr.length-1;i++){
  let c = arr[i].split(',')
  let obj = {
    street:c[1],
    city:c[2],
    zip_code:c[3],
    id_contact:c[4]
  }
  read.push(obj)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Addresses',read, {});
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
