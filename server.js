const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

//routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, ()=> {
    console.log(`server runs at ${PORT}`);
});