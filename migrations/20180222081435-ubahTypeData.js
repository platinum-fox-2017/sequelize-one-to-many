'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.changeColumn('Addresses', 'city', {type: Sequelize.STRING});

  },

  down: (queryInterface, Sequelize) => {

  //  return queryInterface.changeColumn('Addresses', 'city', {type: Sequelize.STRING});
  }
};
