"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class penghuni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      penghuni.hasMany(models.rumah, { as: "rumah" });
    }
  }
  penghuni.init(
    {
      nama_lengkap: DataTypes.STRING,
      foto_ktp: DataTypes.STRING,
      status_hunian: DataTypes.STRING,
      nomor_telepon: DataTypes.STRING,
      status_pernikahan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "penghuni",
    }
  );
  return penghuni;
};
