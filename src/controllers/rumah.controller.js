const { rumah } = require("../models");

const addRumah = async (req, res) => {
  try {
    const {
      penghuni_id,
      nomor_rumah,
      status_hunian,
      status_pembayaran,
      blok_rumah,
    } = req.body;

    if (
      !penghuni_id ||
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
      penghuni_id,
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

module.exports = { addRumah };
