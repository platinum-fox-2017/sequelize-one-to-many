'use strict';

let fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let data = fs.readFileSync('./contacts.csv', 'utf8')

    data = data.trim().split('\n')
    let arrObj = []
    for(let i=0; i<data.length; i++) {
      let dataSplit = data[i].split(',')
      let obj={}
      obj.name = dataSplit[1]
      obj.email = dataSplit[2]
      obj.phone = dataSplit[3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      arrObj.push(obj)
    }

    return queryInterface.bulkInsert('Contacts', arrObj, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
