'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up (queryInterface) {
    // "migrations:run": "sequelize-cli db:migrate",
    // "migrations:revert": "sequelize-cli db:migrate:undo",
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
