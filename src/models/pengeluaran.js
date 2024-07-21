"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pengeluarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pengeluarans.belongsTo(models.bulans, {
        foreignKey: "bulanId",
        as: "bulan",
      });
    }
  }
  pengeluarans.init(
    {
      bulanId: DataTypes.INTEGER,
      jenis_pengeluaran: DataTypes.STRING,
      saldo_keluar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pengeluarans",
    }
  );
  return pengeluarans;
};
