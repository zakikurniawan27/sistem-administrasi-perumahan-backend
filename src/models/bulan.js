"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bulans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bulans.hasMany(models.pembayarans, { as: "bayar" });
      bulans.hasMany(models.pengeluarans, { as: "pengeluaran" });
    }
  }
  bulans.init(
    {
      nama: DataTypes.STRING,
      status_pembayaran: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "bulans",
    }
  );
  return bulans;
};
