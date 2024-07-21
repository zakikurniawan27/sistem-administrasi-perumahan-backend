require("dotenv").config();
const express = require("express");
const cors = require("cors");

const penghuniRouter = require("./routes/penghuni.route");
const rumahRouter = require("./routes/rumah.route");
const pembayaranRouter = require("./routes/pembayaran.route");
const bulanRouter = require("./routes/bulan.route");
const pengeluaranRouter = require("./routes/pengeluaran.route");
const { sequelize } = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("database connection successfully");
  })
  .catch((error) => {
    console.log("connection error", error);
  });

app.use("/api/v1/penghuni", penghuniRouter);
app.use("/api/v1/rumah", rumahRouter);
app.use("/api/v1/pembayaran", pembayaranRouter);
app.use("/api/v1/bulan", bulanRouter);
app.use("/api/v1/pengeluaran", pengeluaranRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running");
});
