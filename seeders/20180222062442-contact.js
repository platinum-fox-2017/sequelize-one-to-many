'use strict';
const fs = require('fs')

let data = fs.readFileSync('contacts.csv','utf-8',(err, data) => {
  console.log(data)
})

let dataArray = data.trim().split('\n')
let tempData = []    
for(let i = 0 ; i < dataArray.length ; i++){
  tempData.push(dataArray[i].split(','))
}

let result = []
for(let i = 0 ; i < tempData[i].length ; i++){
  let obj = {
    name : tempData[i][1],
    email: tempData[i][2],
    phone: tempData[i][3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
    result.push(obj)
}

console.log(result)

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('contacts', result , {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('contacts', null, {});
    
  }
};
