'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('Addresses', 'contactId', { type: Sequelize.INTEGER})
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
