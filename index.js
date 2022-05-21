const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/shopee")
    .then(() => console.log("Connect to Mongo"))
    .catch(() => console.log("Could not connect to Mongo"));
const app = express();
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

require("./prod")(app);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log("Listening on ", port);
});
