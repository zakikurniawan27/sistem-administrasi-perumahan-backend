const { bulans } = require("../models");

const addBulan = async (req, res) => {
  try {
    const { nama } = req.body;

    if (!nama) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }

    await bulans.create({
      nama,
    });
    return res.status(201).send({
      status: 201,
      message: "create bulan success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "create bulan failed",
      error,
    });
  }
};

const getDataBulan = async (req, res) => {
  try {
    const data = await bulans.findAll();

    return res.status(200).send({
      status: 200,
      message: "get data bulan success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get data bulan failed",
    });
  }
};

const updateStatusPembayaran = async (req, res) => {
  try {
    const idBulan = req.params.id;
    const { status_pembayaran } = req.body;

    await bulans.update(
      {
        status_pembayaran,
      },
      {
        where: { id: idBulan },
      }
    );
    return res.status(201).send({
      status: 201,
      message: "update status pembayaran success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "update status pembayaran failed",
    });
  }
};

module.exports = { addBulan, getDataBulan, updateStatusPembayaran };
