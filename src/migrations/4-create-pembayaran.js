"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pembayarans", {
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
      bulanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bulans",
          key: "id",
        },
      },
      saldo_masuk: {
        type: Sequelize.STRING,
      },
      jenis_iuran: {
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
    await queryInterface.dropTable("pembayarans");
  },
};
