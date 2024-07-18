const { rumahs } = require("../models");

const addRumah = async (req, res) => {
  try {
    const { nomor_rumah, status_hunian, status_pembayaran, blok_rumah } =
      req.body;

    if (!nomor_rumah || !status_hunian || !status_pembayaran || !blok_rumah) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }

    await rumahs.create({
      nomor_rumah,
      status_hunian,
      status_pembayaran,
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
    const data = await rumahs.findAll();

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
      include: [
        {
          association: "penghuni",
          where: { rumahId: id },
        },
      ],
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

module.exports = { addRumah, getDataRumah, getDetailDataRumah };
