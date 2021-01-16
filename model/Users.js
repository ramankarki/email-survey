const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  googleID: String,
  credits: { type: Number, default: 0 },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
