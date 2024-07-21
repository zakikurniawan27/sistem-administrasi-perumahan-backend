const { pengeluarans } = require("../models");

const pengeluran = async (req, res) => {
  try {
    const { jenis_pengeluaran, saldo_keluar, bulanId } = req.body;

    if (!jenis_pengeluaran || !saldo_keluar || !bulanId) {
      return res.status(400).send({
        status: 400,
        message: "field must not be empty",
      });
    }
    await pengeluarans.create({
      jenis_pengeluaran,
      saldo_keluar,
      bulanId,
    });

    return res.status(201).send({
      status: 201,
      message: "pengeluaran saldo success",
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "pengeluaran saldo failed",
    });
  }
};

const getTotalSaldoPengeluran = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar");

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

const getSaldoJanuari = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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

const getSaldoFebruari = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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

const getSaldoMaret = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoApril = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoMei = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoJuni = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoJuli = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoAgustus = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoSeptember = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoOktober = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoNovember = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
const getSaldoDesember = async (req, res) => {
  try {
    const data = await pengeluarans.sum("saldo_keluar", {
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
  pengeluran,
  getTotalSaldoPengeluran,
  getSaldoJanuari,
  getSaldoFebruari,
  getSaldoMaret,
  getSaldoApril,
  getSaldoMei,
  getSaldoJuni,
  getSaldoJuli,
  getSaldoAgustus,
  getSaldoSeptember,
  getSaldoOktober,
  getSaldoNovember,
  getSaldoDesember,
};
