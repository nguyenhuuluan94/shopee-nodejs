const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        email: this.email,
        password: this.password,
        id: this._id
    }, "jwtPrivateKey");
};

const UserModel = mongoose.model("User", userSchema);

exports.User = UserModel;
exports.userSchema = userSchema;

