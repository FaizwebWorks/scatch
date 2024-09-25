const express = require("express");
const ownerModel = require("../models/owner.schema");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("owner base route");
});

router.get("/create", (req, res) => {
  res.render("owner-create");
});

router.post("/create", async (req, res, next) => {
  try {
    let owners = await ownerModel.find();

    if (owners.length > 0) {
      return res.send("You don't have permission to create a new owner");
    }

    await ownerModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.send("Succussfully created Owner");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
