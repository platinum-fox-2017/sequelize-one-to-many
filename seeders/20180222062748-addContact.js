'use strict';

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
  


  return queryInterface.bulkInsert('Contacts', [{
    name: 'Marco',
    email: 'marco@demo.com',
    phone: '081111777802',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Marco22',
    email: 'marco2@demo.com',
    phone: '081111777802',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Marco3',
    email: 'marco3@demo.com',
    phone: '081111777802',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Marco4',
    email: 'marco4@demo.com',
    phone: '081111777802',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Marco5',
    email: 'marco5@emo.com',
    phone: '0811151777802',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});

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
