const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    description: String,
    price: String,
    sold: String,
    rating: String,
    discountPercentage: Number,
    stars: Number,
    discountPrice: String,
    saleHour: String,
    combo: String,
    freeShippingValue: String,
    availableNumber: Number,
    colors: [String],
    productImage: string
});

const Product = mongoose.model("Product", productSchema);

module.exports.productSchema = productSchema;
module.exports.Product = Product;
