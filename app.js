const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const usersRoutes = require("./routes/user.routes");
const productsRoutes = require("./routes/product.routes");
const ownersRoutes = require("./routes/owner.routes");

// env
require("dotenv").config({ path: "./.env" });

// database
require("./config/db");

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie-parser
app.use(cookieParser());
// static route
app.use(express.static(path.join(__dirname, "public")));
// ejs setup
app.set("view engine", "ejs");

// base routes
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/owners", ownersRoutes);

app.get("/", (req, res) => {
  res.send("index page");
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
