"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rumahs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rumahs.hasMany(models.penghunis, { as: "penghuni" });
    }
  }
  rumahs.init(
    {
      nomor_rumah: DataTypes.STRING,
      status_hunian: DataTypes.STRING,
      status_pembayaran: DataTypes.STRING,
      blok_rumah: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rumahs",
    }
  );
  return rumahs;
};
