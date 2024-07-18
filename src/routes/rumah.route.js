const express = require("express");
const { addRumah } = require("../controllers/rumah.controller");

const router = express.Router();

router.post("/tambahRumah", addRumah);

module.exports = router;
