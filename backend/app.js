const express = require("express");
const app = express();

const auth = require("./routes/auth");
const cors = require("cors");
const restaurant = require("./routes/restaurant")
// Middlewares
app.use(cors());
app.use(express.json());


app.use("/api/v1/users", auth)
app.use("/api/v1/eats/stores", restaurant)
module.exports = app;