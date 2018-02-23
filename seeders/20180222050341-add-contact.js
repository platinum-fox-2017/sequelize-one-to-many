'use strict';
const fs = require('fs');


module.exports = {
  up: (queryInterface, Sequelize) => {
            let data = fs.readFileSync('./contacts.csv','utf8').split('\n');
            let contactArr = new Array();
            for(let i = 0; i < data.length-1; i++){
                let tempArr = data[i].split(',');
                let tempObj = new Object();
                tempObj.name = tempArr[1];
                tempObj.email = tempArr[2];
                tempObj.phone = tempArr[3];
                tempObj.createdAt = new Date();
                tempObj.updatedAt = new Date();
                contactArr.push(tempObj);
            }
            return queryInterface.bulkInsert('Contacts',contactArr,{});



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
