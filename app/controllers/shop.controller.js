const db = require("../models");
const Shop = db.shops;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.shop_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const shop = new Shop({
    merchant_id: req.body.merchant_name,
    shop_name: req.body.shop_name,
    shop_category: req.body.shop_category,
    trade_license_number: req.body.trade_license_number,
    age_of_shop: req.body.age_of_shop,
    shop_image: req.body.shop_image,
  });

  shop
    .save(shop)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Shop.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Shop.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving shops.",
      });
    });
};
