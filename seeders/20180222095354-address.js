'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
   let arr = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\n').map(x => x.split(','))
   let header = ['Street', 'City', 'ZipCode']
   let result = []
   for (let i = 0; i < arr.length; i++){
     let obj = {}
     obj.Street = arr[i][1]
     obj.City = arr[i][2]
     obj.ZipCode = arr[i][3]
     obj.createdAt = new Date()
     obj.updatedAt = new Date()
     result.push(obj)
   }  
   return queryInterface.bulkInsert('Addresses', result, {})
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
