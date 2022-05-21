const express = require("express");
const router = express.Router();
const {Product} = require("../models/product.model");

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send("Product not found");
    }
    res.send(product);
});


module.exports = router;
