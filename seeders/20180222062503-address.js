'use strict';
const fs = require('fs')

let data = fs.readFileSync('addresses.csv','utf-8',(err, data) => {
  console.log(data)
})

let dataArray = data.trim().split('\n')
let tempData = []    
for(let i = 0 ; i < dataArray.length ; i++){
  tempData.push(dataArray[i].split(','))
}

let result = []
for(let i = 0 ; i < tempData.length ; i++){
  let obj = {
    street : tempData[i][1],
    city: tempData[i][2],
    zip_code: tempData[i][3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
    result.push(obj)
}


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('addresses', result, {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('addresses', null, {});
    
  }
};
