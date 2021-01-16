const keys = require("./../config/keys");
const stripe = require("stripe")(keys.stripePrivateKey);
const User = require("../model/Users");

exports.postStripeToken = async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "INR",
    description: "Rs50 for 5 credits",
    source: req.body.id,
  });

  let user = await User.findById(req.user.id);
  user.credits += 5;
  user = await user.save();

  res.status(200).json({
    status: "success",
    statusCode: 200,
    user,
  });
};
