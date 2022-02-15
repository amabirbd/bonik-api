# NodeJS express MongoDB API

## Routes
    http://localhost:8080/api/shops (post, get)
    http://localhost:8080/api/merchants (post, get)


## Merchant fields
        merchant_name: String,
        user_name: String,
        phone: { Number, default: 0 },
        email: String,
        nid: { String, default: "" },
        subscription_package_id: Number,
        account_creation_date: { type: Date, default: Date.now },
        subscription_end_date: { type: Date, default: Date.now },
        used_referral_code: { String, default: "" },
## Shop fields
        merchant_id: String,
        shop_name: String,
        shop_category: String,
        trade_license_number: String,
        age_of_shop: Number,
        shop_image: String (shop_image is a "file" field)