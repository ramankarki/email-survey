const express = require("express");
const googleOauth = require("./routes/google-oauth");

const app = express();

// initialize global middleware
app.use(express.json());

// google oauth
app.use("/auth/google", googleOauth);

module.exports = app;
