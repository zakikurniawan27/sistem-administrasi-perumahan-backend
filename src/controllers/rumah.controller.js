const { rumahs } = require("../models");
const { penghunis } = require("../models");

const addRumah = async (req, res) => {
  try {
    const { nomor_rumah, blok_rumah } = req.body;

    if (!nomor_rumah || !blok_rumah) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }

    await rumahs.create({
      nomor_rumah,
      blok_rumah,
    });

    return res.status(201).send({
      status: 201,
      message: "Create rumah success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "Create rumah failed",
      error,
    });
  }
};

const getDataRumah = async (req, res) => {
  try {
    const data = await rumahs.findAll({ include: { association: "penghuni" } });

    return res.status(200).send({
      status: 200,
      message: "get data rumah success",
      rumah: data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get data rumah failed",
      error,
    });
  }
};

const getDetailDataRumah = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await rumahs.findByPk(id, {
      include: {
        association: "penghuni",
        where: { rumahId: id },
        include: { association: "bayar", include: { association: "bulan" } },
      },
    });

    return res.status(200).send({
      status: 200,
      message: "get detail data rumah success",
      detail: data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get detail data rumah failed",
      error,
    });
  }
};

const updateRumah = async (req, res) => {
  try {
    const idRumah = req.params.id;
    const { nomor_rumah, status_hunian, blok_rumah } = req.body;

    await rumahs.update(
      {
        nomor_rumah,
        status_hunian,
        blok_rumah,
      },
      {
        where: { id: idRumah },
      }
    );

    return res.status(201).send({
      status: 201,
      message: "update data rumah success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "update data rumah failed",
      error,
    });
  }
};

const updateStatusHunian = async (req, res) => {
  try {
    const idRumah = req.params.id;
    const { status_hunian } = req.body;

    await rumahs.update(
      {
        status_hunian,
      },
      {
        where: { id: idRumah },
      }
    );

    return res.status(201).send({
      status: 201,
      message: "update data rumah success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "update data rumah failed",
      error,
    });
  }
};

module.exports = {
  addRumah,
  getDataRumah,
  getDetailDataRumah,
  updateRumah,
  updateStatusHunian,
};
