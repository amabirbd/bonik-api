module.exports = (app) => {
  const merchants = require("../controllers/merchant.controller");

  var router = require("express").Router();

  router.post("/", merchants.create);
  router.get("/", merchants.findAll);

  app.use("/api/merchants", router);
};
