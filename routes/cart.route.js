const express = require("express");
const router = express.Router();
const {Cart} = require("../models/cart.model");
const {Product} = require("../models/product.model");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, async (req, res) => {
    const carts = await Cart.find({"user.email": req.user.email});
    res.send(carts);
});

router.post("/", auth, async (req, res) => {
    const product = await Product.findById(req.body.productId);

    const cart = new Cart({
        product: product,
        quantity: req.body.quantity,
        user: req.user
    });
    await cart.save();
    res.send(cart);
});

router.delete("/", auth, async (req, res) => {
    let carts = await Cart.find({"user.email": req.user.email});
    const index = carts.findIndex(c => String(c._id) === String(req.body.cartId));
    if (index === -1) {
        return res.status(404).send("Cart item does not exist");
    }

    await Cart.findByIdAndDelete(req.body.cartId);
    res.send(true);
});

module.exports = router;
