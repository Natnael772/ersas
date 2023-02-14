const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

app.use(bodyparser.urlencoded());
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running");
  mongoose
    .connect(
      "mongodb+srv://natnael:root@cluster0.gy0a5.mongodb.net/ersasdb?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
