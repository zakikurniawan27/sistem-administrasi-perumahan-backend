"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rumahs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      penghuniId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "penghunis",
          key: "id",
        },
      },
      nomor_rumah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_hunian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_pembayaran: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blok_rumah: {
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
    await queryInterface.dropTable("rumahs");
  },
};
