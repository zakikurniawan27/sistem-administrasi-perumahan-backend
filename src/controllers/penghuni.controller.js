const { penghuni } = require("../models");

const addPenghuni = async (req, res) => {
  const { nama_lengkap, status_hunian, nomor_telepon, status_pernikahan } =
    req.body;

  try {
    if (
      !nama_lengkap ||
      !status_hunian ||
      !nomor_telepon ||
      !status_pernikahan
    ) {
      return res.status(400).send({
        status: 400,
        message: "field must not empty",
      });
    }

    await penghuni.create({
      nama_lengkap,
      foto_ktp: req.file.path,
      status_hunian,
      nomor_telepon,
      status_pernikahan,
    });

    return res.status(201).send({
      status: 201,
      message: "Create penghuni success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "Create penghuni failed",
    });
  }
};

const getDataPenghuni = async (req, res) => {
  try {
    const data = await penghuni.findAll();

    return res.status(200).send({
      status: 200,
      message: "get data penghuni success",
      penghuni: data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get data penghuni failed",
    });
  }
};

module.exports = { addPenghuni, getDataPenghuni };
