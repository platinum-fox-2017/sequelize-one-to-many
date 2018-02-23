'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = fs.readFileSync('./addresses.csv','utf8').split('\n');
      let addressArr = new Array();
      for(let i = 0; i < data.length-1; i++){
          let tempArr = data[i].split(',');
          let tempObj = new Object();
          tempObj.street = tempArr[1];
          tempObj.city = tempArr[2];
          tempObj.zip_code = tempArr[3];
          tempObj.createdAt = new Date();
          tempObj.updatedAt = new Date();
          addressArr.push(tempObj);
      }
      return queryInterface.bulkInsert('Addresses',addressArr,{});


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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
