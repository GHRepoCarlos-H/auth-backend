'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword1 = await bcrypt.hash('password1', 10);
    const hashedPassword2 = await bcrypt.hash('password2', 10);

    return queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        password: hashedPassword1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jane_doe',
        password: hashedPassword2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

