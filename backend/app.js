const express = require("express");
const app = express();

const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const errorMiddleware = require("./middlewares/errors");

//Routes
const auth = require("./routes/auth");
const cart = require("./routes/cart");
const foodRouter = require("./routes/foodItem");
const menuRouter = require("./routes/menu");
const order = require("./routes/order");
const payment = require("./routes/payment");
const restaurant = require("./routes/restaurant")
const ErrorHandler = require("./utils/errorHandler");

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173", "https://food-ordering-web-app-seven.vercel.app/"],
  credentials: true
}));
app.use(cookieParser());
app.use(fileUpload());

app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "30kb" }));

// Routes
app.use("/api/v1/eats", foodRouter);
app.use("/api/v1/eats/menus", menuRouter);
app.use("/api/v1/eats/orders", order);
app.use("/api/v1/users", auth)
app.use("/api/v1/eats/stores", restaurant)
app.use("/api/v1", payment);
app.use("/api/v1/eats/cart", cart);

//view Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 404 Handler
app.use((req, res, next) => {
  next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
});

// Global Error Handler
app.use(errorMiddleware);

module.exports = app;