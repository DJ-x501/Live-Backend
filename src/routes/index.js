const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");

//these are the auth routes..................
router.use("/auth", authRoutes);

module.exports = router;
