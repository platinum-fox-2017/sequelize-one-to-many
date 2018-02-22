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
      
   return queryInterface.bulkInsert('Addresses', [{
    street: 'jl.pondok indah no.22',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.33',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.44',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.55',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.66',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.77',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.88',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.99',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.1010',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    street: 'jl.pondok indah no.1111',
    city: 'jakarta',
    zip_code: '12940',
    createdAt: new Date(),
    updatedAt: new Date()
  } ], {});



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
