'use strict';
const fs = require('fs');
var contacts = fs.readFileSync('./contacts.csv', 'utf8').split('\n');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrayOfContacts = [];
    for(let i=0; i<contacts.length; i++){
      let contact = contacts[i].split(',');
      let nama = contact[1];
      let imel = contact[2];
      let telepon = contact[3];
      let waktuSekarang = new Date();
      let updateNanti = new Date();
      arrayOfContacts.push({name:nama,email:imel,phone:telepon,createdAt:waktuSekarang,updatedAt:updateNanti})
    }
    return queryInterface.bulkInsert('Contacts',arrayOfContacts,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts',null,{});
  }
};
