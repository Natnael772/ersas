const app = require("express")();

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://natnael:root@cluster0.gy0a5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(8080);
    console.log("Server running on port 8080");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
