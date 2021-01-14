const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleID: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
