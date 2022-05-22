const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/shopee", {useNewUrlParser: true})
    .then(() => console.log("Connect to Mongo"))
    .catch((err) => console.log("Could not connect to Mongo", err));
const app = express();
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
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
