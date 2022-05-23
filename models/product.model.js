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
const products = [{
    description: "Mũ lưỡi trai ❤️ Nón kết thêu chữ Memorie phong cách Ulzzang form unisex nam nữ N01",
    price: "đ1.700",
    sold: "2,6k",
    rating: "35,5k",
    discountPercentage: 51,
    stars: 5,
    discountPrice: "đ45.000",
    saleHour: "9:00",
    combo: "Mua 4 & giảm 2%",
    freeShippingValue: "đ50.00",
    colors: ["Màu đen", "Màu hồng", "Màu xanh", "Màu kem"],
    availableNumber: 5280
}];

module.exports.products = products;
module.exports.productSchema = productSchema;
module.exports.Product = Product;
