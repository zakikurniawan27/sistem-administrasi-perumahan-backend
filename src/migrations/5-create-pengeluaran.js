"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pengeluarans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bulanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bulans",
          key: "id",
        },
      },
      jenis_pengeluaran: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      saldo_keluar: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("pengeluarans");
  },
};
