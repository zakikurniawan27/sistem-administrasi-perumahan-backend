"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("penghunis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto_ktp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_hunian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomor_telepon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_pernikahan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("penghunis");
  },
};
