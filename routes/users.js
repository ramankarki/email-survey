const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  if (req.user) {
    res.status(200).json({
      status: "logged in",
      user: req.user,
    });
  } else {
    res.status(400).json({
      status: "logged out",
    });
  }
});

module.exports = router;
