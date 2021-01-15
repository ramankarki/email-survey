const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const googleOauth = require("./routes/googleOauth");
const keys = require("./config/keys");
const usersRoute = require("./routes/users");

const app = express();

// initialize global middleware
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// google oauth
app.use("/auth/google", googleOauth);
app.use("/api/v1/user", usersRoute);

module.exports = app;
