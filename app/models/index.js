const dbConfig = require("../db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.merchants = require("./merchant.model.js")(mongoose);
db.shops = require("./shop.model.js")(mongoose);

module.exports = db;
