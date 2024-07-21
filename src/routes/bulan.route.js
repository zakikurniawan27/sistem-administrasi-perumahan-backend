const express = require("express");
const {
  getDataBulan,
  addBulan,
  updateStatusPembayaran,
} = require("../controllers/bulan.controller");

const router = express.Router();

router.get("/", getDataBulan);
router.post("/tambah-bulan", addBulan);
router.patch("/update/status/pembayaran/:id", updateStatusPembayaran);

module.exports = router;
