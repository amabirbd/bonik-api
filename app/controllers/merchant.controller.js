const db = require("../models");
const Merchant = db.merchants;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.merchant_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const merchant = new Merchant({
    merchant_name: req.body.merchant_name,
    user_name: req.body.user_name,
    phone: req.body.phone,
    email: req.body.email,
    nid: req.body.nid,
    subscription_package_id: req.body.subscription_package_id,
    account_creation_date: req.body.subscription_creation_date,
    subscription_end_date: req.body.subscription_end_date,
    used_referral_code: req.body.used_referral_code,
  });

  merchant
    .save(merchant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Merchant.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Merchant.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving merchants.",
      });
    });
};
