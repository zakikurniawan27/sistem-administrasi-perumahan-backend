const express = require("express");
const { addRumah, getDataRumah } = require("../controllers/rumah.controller");

const router = express.Router();

router.get("/", getDataRumah);
router.post("/tambahRumah", addRumah);

module.exports = router;
