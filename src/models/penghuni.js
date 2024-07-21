"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class penghunis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      penghunis.belongsTo(models.rumahs, {
        foreignKey: "rumahId",
        as: "rumah",
      });
      penghunis.hasMany(models.pembayarans, { as: "bayar" });
    }
  }
  penghunis.init(
    {
      nama_lengkap: DataTypes.STRING,
      foto_ktp: DataTypes.STRING,
      status_hunian: DataTypes.STRING,
      nomor_telepon: DataTypes.STRING,
      status_pernikahan: DataTypes.STRING,
      rumahId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "penghunis",
    }
  );
  return penghunis;
};
