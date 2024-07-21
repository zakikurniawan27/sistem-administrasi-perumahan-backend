const express = require("express");
const {
  pembayaranIuran,
  getDataPembayaran,
  pengeluran,
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
} = require("../controllers/pembayaran.controller");

const router = express.Router();

router.get("/", getDataPembayaran);
router.get("/total-saldo", getTotalSaldoPemasukan);
router.get("/total-saldo/januari", getTotalSaldoPemasukanJanuari);
router.get("/total-saldo/februari", getTotalSaldoPemasukanFebruari);
router.get("/total-saldo/maret", getTotalSaldoPemasukanMaret);
router.get("/total-saldo/april", getTotalSaldoPemasukanApril);
router.get("/total-saldo/mei", getTotalSaldoPemasukanMei);
router.get("/total-saldo/juni", getTotalSaldoPemasukanJuni);
router.get("/total-saldo/juli", getTotalSaldoPemasukanJuli);
router.get("/total-saldo/agustus", getTotalSaldoPemasukanAgustus);
router.get("/total-saldo/september", getTotalSaldoPemasukanSeptember);
router.get("/total-saldo/oktober", getTotalSaldoPemasukanOktober);
router.get("/total-saldo/november", getTotalSaldoPemasukanNovember);
router.get("/total-saldo/desember", getTotalSaldoPemasukanDesember);
router.post("/bayar/iuran", pembayaranIuran);

module.exports = router;
