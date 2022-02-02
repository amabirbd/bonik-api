module.exports = (app) => {
  const shops = require("../controllers/shop.controller.js");

  var router = require("express").Router();

  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.split(" ").join("-");
      cb(null, fileName + "-" + Date.now());
    },
  });

  const uploadOptions = multer({ storage: storage });

  router.post("/", uploadOptions.single("shop_image"), shops.create);
  router.get("/", shops.findAll);

  app.use("/api/shops", router);
};
