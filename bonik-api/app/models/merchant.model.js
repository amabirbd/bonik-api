module.exports = (mongoose) => {
  const Merchant = mongoose.model(
    "merchant",
    mongoose.Schema(
      {
        merchant_name: String,
        user_name: String,
        phone: { Number, default: 0 },
        email: String,
        nid: { String, default: "" },
        subscription_package_id: Number,
        account_creation_date: { type: Date, default: Date.now },
        subscription_end_date: { type: Date, default: Date.now },
        used_referral_code: { String, default: "" },
      },
      { strict: false }
    )
  );

  return Merchant;
};
