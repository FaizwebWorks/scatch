const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGOURL}scatch`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
