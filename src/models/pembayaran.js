"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pembayarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembayarans.belongsTo(models.penghunis, {
        foreignKey: "penghuniId",
        as: "penghuni",
      });
      pembayarans.belongsTo(models.bulans, {
        foreignKey: "bulanId",
        as: "bulan",
      });
    }
  }
  pembayarans.init(
    {
      penghuniId: DataTypes.INTEGER,
      bulanId: DataTypes.INTEGER,
      jenis_iuran: DataTypes.STRING,
      saldo_masuk: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pembayarans",
    }
  );
  return pembayarans;
};
