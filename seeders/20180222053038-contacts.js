'use strict';
const fs = require('fs')


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      let data = fs.readFileSync('./contacts.csv','utf8').split('\n')
      let arrContact =[]
      let objContact = {}
      for(let i =0; i<data.length; i++){
          let contactData = data[i].split(",")
          for(let j=1; j<contactData.length; j++ ){
            objContact = {
                  name : contactData[1],
                  email : contactData[2],
                  phone : contactData[3],
                  createdAt : new Date(),
                  updatedAt : new Date()
              }
          }
          arrContact.push(objContact)
      }
   
      return queryInterface.bulkInsert('Contacts',arrContact, {});

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
