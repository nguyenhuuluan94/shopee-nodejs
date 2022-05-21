const express = require("express");
const router = express.Router();
const {User} = require("../models/user.model");

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email) {
        return res.status(400).send("Email is required");
    }
    if (!password) {
        return res.status(400).send("Password is required");
    }

    let user = await User.findOne({email: email});
    if (!user) {
        return res.status(400).send("Invalid username or password");
    }

    if (user.password !== req.body.password) {
        return res.status(400).send("Invalid username or password");
    }
    
    res.header('x-auth-token', user.generateAuthToken()).send(user);
});


router.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email) {
        return res.status(400).send("Email is required");
    }
    if (!password) {
        return res.status(400).send("Password is required");
    }
    let user = await User.findOne({email: email});
    if (user) {
        return res.status(400).send("User already exists");
    }

    user = new User({email, password});
    await user.save();
  
    res.header('x-auth-token', user.generateAuthToken()).send(user);
});

module.exports = router;
