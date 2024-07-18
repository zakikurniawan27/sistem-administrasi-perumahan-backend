const { rumah } = require("../models");

const addRumah = async (req, res) => {
  try {
    const {
      penghuniId,
      nomor_rumah,
      status_hunian,
      status_pembayaran,
      blok_rumah,
    } = req.body;

    if (
      !penghuniId ||
      !nomor_rumah ||
      !status_hunian ||
      !status_pembayaran ||
      !blok_rumah
    ) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }

    await rumah.create({
      penghuniId,
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
    });
  }
};

const getDataRumah = async (req, res) => {
  try {
    const data = await rumah.findAll();

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

module.exports = { addRumah, getDataRumah };
