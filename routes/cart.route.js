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
        color: req.body.color,
        user: req.user
    });
    await cart.save();
    res.send(cart);
});

router.delete("/:id", auth, async (req, res) => {
    if (!req.params.id) {
        return res.status(404).send("Cannot parse cart id");
    }
    const carts = await Cart.findById(req.params.id);
    if (!carts) {
        return res.status(404).send("Cart item not found");
    }
    

    await Cart.findByIdAndDelete(req.params.id);
    res.send(true);
});

module.exports = router;
