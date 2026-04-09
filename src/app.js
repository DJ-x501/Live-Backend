const express = require("express");
const baseRoute = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", baseRoute);

module.exports = app;
