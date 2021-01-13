const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

passport.use(new GoogleStrategy());

// initialize global middleware
app.use(express.json());

module.exports = app;
