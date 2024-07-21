const express = require("express");
const {
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
} = require("../controllers/pengeluaran.controller");

const router = express.Router();

router.get("/total-saldo", getTotalSaldoPengeluran);
router.get("/saldo-januari", getSaldoJanuari);
router.get("/saldo-februari", getSaldoFebruari);
router.get("/saldo-maret", getSaldoMaret);
router.get("/saldo-april", getSaldoApril);
router.get("/saldo-mei", getSaldoMei);
router.get("/saldo-juni", getSaldoJuni);
router.get("/saldo-juli", getSaldoJuli);
router.get("/saldo-agustus", getSaldoAgustus);
router.get("/saldo-september", getSaldoSeptember);
router.get("/saldo-oktober", getSaldoOktober);
router.get("/saldo-november", getSaldoNovember);
router.get("/saldo-desember", getSaldoDesember);
router.post("/addPengeluaran", pengeluran);

module.exports = router;
