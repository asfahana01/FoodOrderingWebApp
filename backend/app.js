const express = require("express");
const app = express();

const auth = require("./routes/auth");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());


app.use("/api/v1/users", auth)
module.exports = app;