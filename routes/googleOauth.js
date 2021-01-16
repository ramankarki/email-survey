const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = require("./../model/Users");
const router = express.Router();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientKey,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      let user = await User.findOne({ googleID: profile.id });

      if (!user) {
        user = await new User({
          name: profile._json.given_name,
          email: profile._json.email,
          photo: profile._json.picture,
          googleID: profile.id,
        }).save();
      }

      done(null, user);
    }
  )
);

// login
router.route("/").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// callback for exchanging code with data with google
router.route("/callback").get(passport.authenticate("google"), (req, res) => {
  res.redirect("/surveys");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
