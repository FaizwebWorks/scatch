const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        trim: true,
      },
      email: String,
      password: String,
      products: {
        type: Array,
        default: [],
      },
      picture: String,
      gstin: String,
});

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = ownerModel;
