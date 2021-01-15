const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  if (req.user) {
    res.status(200).json({
      status: "logged in",
      statusCode: 200,
      user: req.user,
    });
  } else {
    res.status(200).json({
      status: "logged out",
      statusCode: 400,
    });
  }
});

module.exports = router;
