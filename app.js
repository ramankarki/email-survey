const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const googleOauth = require("./routes/googleOauth");
const keys = require("./config/keys");
const usersRoute = require("./routes/users");
const bilingStripe = require("./routes/bilingStripe");
const requireLoginAuth = require("./controller/requireLoginAuth");

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
app.use("/api/v1/stripe", requireLoginAuth, bilingStripe);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));

  app.get("/surveys", (req, res) => {
    if (!req.user) {
      return res.redirect("/");
    }
    res.sendFile(__dirname + "/client/build/index.html");
  });
}

module.exports = app;
