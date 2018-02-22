'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./addresses.csv','utf8').split('\n')
      let arrAddress =[]
      let objAddress = {}
      for(let i =0; i<data.length; i++){
          let addressData = data[i].split(",")
          for(let j=1; j<addressData.length; j++ ){
            objAddress = {
                  street : addressData[1],
                  city : addressData[2],
                  zip_code : addressData[3],
                  createdAt : new Date(),
                  updatedAt : new Date()
              }
          }
          arrAddress.push(objAddress)
      }
      return queryInterface.bulkInsert('Addresses',arrAddress, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
