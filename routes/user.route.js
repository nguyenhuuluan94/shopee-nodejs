const express = require("express");
const router = express.Router();
const {User} = require("../models/user.model");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth.middleware');

router.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.send(user);
});

router.put("/change-password", auth, async (req, res) => {
    let user = await User.findById(req.user.id);
    
    if (!user) {
        return res.status(404).send("User does not exist");
    }

    if (user.password !== req.body.password) {
        return res.status(400).send("Invalid old password");
    }

    user.password = req.body.newPassword;
    user.save();
    
    res.send(user);
});

module.exports = router;
