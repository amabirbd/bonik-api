module.exports = (mongoose) => {
  const Shop = mongoose.model(
    "shop",
    mongoose.Schema({
      merchant_id: Number,
      shop_name: String,
      shop_category: Number,
      trade_license_number: String,
      age_of_shop: Number,
      shop_image: String,
    })
  );

  return Shop;
};
