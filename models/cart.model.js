const mongoose = require("mongoose");
const userModule = require('./user.model');
const productModule = require('./product.model');

const cartSchema = new mongoose.Schema({
    quantity: Number,
    product: productModule.productSchema,
    user: userModule.userSchema,
});

const Cart = mongoose.model("Cart", cartSchema);

const carts = [{
    product: productModule.products[0],
    quantity: 3,
    user: {
        email: 'nguyenhuuluan'
    }
}];

module.exports.carts = carts;
module.exports.cartSchema = cartSchema;
module.exports.Cart = Cart;

