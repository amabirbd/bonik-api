module.exports = (mongoose) => {
  const Shop = mongoose.model(
    "shop",
    mongoose.Schema(
      {
        merchant_id: String,
        shop_name: String,
        shop_category: String,
        trade_license_number: String,
        age_of_shop: Number,
        shop_image: String,
      },
      { strict: false }
    )
  );

  return Shop;
};
