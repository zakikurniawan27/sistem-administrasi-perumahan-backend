const express = require("express");
const {
  addPenghuni,
  getDataPenghuni,
} = require("../controllers/penghuni.controller");
const { upload } = require("../middlewares/upload");

const router = express.Router();

router.post("/tambahPenghuni", upload.single("foto_ktp"), addPenghuni);

module.exports = router;
