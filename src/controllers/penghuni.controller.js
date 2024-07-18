const { penghunis } = require("../models");
const { rumahs } = require("../models/rumah");

const addPenghuni = async (req, res) => {
  try {
    const {
      nama_lengkap,
      status_hunian,
      nomor_telepon,
      status_pernikahan,
      rumahId,
    } = req.body;
    if (
      !nama_lengkap ||
      !status_hunian ||
      !nomor_telepon ||
      !status_pernikahan ||
      !rumahId
    ) {
      return res.status(400).send({
        status: 400,
        message: "field must not empty",
      });
    }

    await penghunis.create({
      nama_lengkap,
      foto_ktp: req.file.path,
      status_hunian,
      nomor_telepon,
      status_pernikahan,
      rumahId,
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
    const data = await penghunis.findAll();

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

const getDetailDataPenghuni = async (req, res) => {
  try {
    const idPenghuni = req.params.id;
    const data = await penghunis.findByPk(idPenghuni);

    return res.status(200).send({
      status: 200,
      message: "get detail data penghuni success",
      detail: data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get detail data penghuni failed",
      error,
    });
  }
};

const updateDataPenghuni = async (req, res) => {
  try {
    const idPenghuni = req.params.id;
    const { nama_lengkap, status_hunian, nomor_telepon, status_pernikahan } =
      req.body;

    await penghunis.update(
      {
        nama_lengkap,
        foto_ktp: req.file.path,
        status_hunian,
        nomor_telepon,
        status_pernikahan,
      },
      {
        where: { id: idPenghuni },
      }
    );

    return res.status(201).send({
      status: 201,
      message: "update data penghuni success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "update data penghuni failed",
    });
  }
};

module.exports = {
  addPenghuni,
  getDataPenghuni,
  getDetailDataPenghuni,
  updateDataPenghuni,
};
