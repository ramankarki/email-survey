const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./../config/keys");

const router = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientKey,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
    }
  )
);

router.route("/").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.route("/callback").get(passport.authenticate("google"));

module.exports = router;
