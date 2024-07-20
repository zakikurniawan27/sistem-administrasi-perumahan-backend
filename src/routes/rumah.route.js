const express = require("express");
const {
  addRumah,
  getDataRumah,
  getDetailDataRumah,
  updateRumah,
  updateStatusHunian,
} = require("../controllers/rumah.controller");

const router = express.Router();

router.get("/", getDataRumah);
router.get("/detail/:id", getDetailDataRumah);
router.post("/tambahRumah", addRumah);
router.put("/update/:id", updateRumah);
router.patch("/update/status/hunian/:id", updateStatusHunian);

module.exports = router;
