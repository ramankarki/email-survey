const express = require("express");
const router = express.Router();

const { postStripeToken } = require("./../controller/bilingStripe");

router.route("/").post(postStripeToken);

module.exports = router;
