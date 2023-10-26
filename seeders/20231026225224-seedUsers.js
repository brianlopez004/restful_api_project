'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Brian',
      email: 'braian@gmail.com',
      password: 'bra123',
      phone: '3007922222',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kevin',
      email: 'Kevin@gmail.com',
      password: 'Kevin20005',
      phone: '3007922222',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
