const express = require("express");
const {
  addPenghuni,
  getDataPenghuni,
  getDetailDataPenghuni,
  updateDataPenghuni,
  download,
} = require("../controllers/penghuni.controller");
const { upload } = require("../middlewares/upload");

const router = express.Router();

router.get("/", getDataPenghuni);
router.get("/detail/penghuni/:id", getDetailDataPenghuni);
router.post("/tambahPenghuni", upload.single("foto_ktp"), addPenghuni);
router.put(
  "/update/penghuni/:id",
  upload.single("foto_ktp"),
  updateDataPenghuni
);
router.get("/file/:name", download);

module.exports = router;
