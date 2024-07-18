const express = require("express");
const {
  addRumah,
  getDataRumah,
  getDetailDataRumah,
} = require("../controllers/rumah.controller");
const { getDetailDataPenghuni } = require("../controllers/penghuni.controller");

const router = express.Router();

router.get("/", getDataRumah);
router.get("/detail/:id", getDetailDataRumah);
router.post("/tambahRumah", addRumah);

module.exports = router;
