'use strict';
const fs = require('fs')

let data = fs.readFileSync('contacts.csv','UTF-8')
// console.log(data);
let arr = data.split('\n')
let read = []
for(let i = 0;i<arr.length-1;i++){
  let c = arr[i].split(',')
  let obj = {
    name:c[1],
    email:c[2],
    phone:c[3]
  }
  read.push(obj)
}


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Contacts',read, {});

    /*
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
