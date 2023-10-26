'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      title: 'Arroz',
      content: 'lorem ipsum',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Pan',
      content: 'lorem ipsum',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Articles', null, {});

  }
};
