if (process.env.NODE_ENV === "production") {
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientKey: process.env.GOOGLE_CLIENT_KEY,
    dbstring: process.env.DBSTRING,
    cookieKey: process.env.COOKIE_KEY,
  };
} else {
  module.exports = require("./dev");
}
