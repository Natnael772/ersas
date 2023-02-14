const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(bodyparser.urlencoded());
app.use(express.json());

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running");
  mongoose
    .connect(
      "mongodb+srv://natnael:root@cluster0.gy0a5.mongodb.net/?retryWrites=true&w=majority"
    )
    .then()
    .catch();
});
