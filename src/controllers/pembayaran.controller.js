const { pembayarans } = require("../models");
const { penghunis } = require("../models");

const pembayaranIuran = async (req, res) => {
  try {
    const { penghuniId, jenis_iuran, saldo_masuk, bulanId } = req.body;

    if (!penghuniId || !bulanId || !jenis_iuran || !saldo_masuk) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }
    await pembayarans.create({
      penghuniId,
      bulanId,
      jenis_iuran,
      saldo_masuk,
    });

    return res.status(201).send({
      status: 201,
      message: "pembayaran iuran success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "pembayaran iuran failed",
    });
  }
};

const getDataPembayaran = async (req, res) => {
  try {
    const data = await penghunis.findAll({
      include: { association: "bayar", include: { association: "bulan" } },
    });

    return res.status(200).send({
      status: 200,
      message: "get data pembayaran succes",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get data pembayaran failed",
      error,
    });
  }
};

const getTotalSaldoPemasukan = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk");

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanJanuari = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 1 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanFebruari = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 2 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanMaret = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 3 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};
const getTotalSaldoPemasukanApril = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 4 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};
const getTotalSaldoPemasukanMei = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 5 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};
const getTotalSaldoPemasukanJuni = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 6 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};
const getTotalSaldoPemasukanJuli = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 7 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};
const getTotalSaldoPemasukanAgustus = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 8 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanSeptember = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 9 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanOktober = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 10 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanNovember = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 11 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

const getTotalSaldoPemasukanDesember = async (req, res) => {
  try {
    const data = await pembayarans.sum("saldo_masuk", {
      where: { bulanId: 12 },
    });

    return res.status(200).send({
      status: 200,
      message: "get total saldo success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "get total saldo failed",
    });
  }
};

module.exports = {
  pembayaranIuran,
  getDataPembayaran,
  getTotalSaldoPemasukan,
  getTotalSaldoPemasukanJanuari,
  getTotalSaldoPemasukanFebruari,
  getTotalSaldoPemasukanMaret,
  getTotalSaldoPemasukanApril,
  getTotalSaldoPemasukanMei,
  getTotalSaldoPemasukanJuni,
  getTotalSaldoPemasukanJuli,
  getTotalSaldoPemasukanAgustus,
  getTotalSaldoPemasukanSeptember,
  getTotalSaldoPemasukanOktober,
  getTotalSaldoPemasukanNovember,
  getTotalSaldoPemasukanDesember,
};
