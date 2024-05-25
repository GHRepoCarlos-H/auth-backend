'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Data', [
      {
        dataField: 'Sample data 1',
        userId: 1, // Assuming this userId exists
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dataField: 'Sample data 2',
        userId: 2, // Assuming this userId exists
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dataField: 'Sample data 3',
        userId: 1, // Assuming this userId exists
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Data', null, {});
  }
};


