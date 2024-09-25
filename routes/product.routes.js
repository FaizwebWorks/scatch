const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("product base route");
});

module.exports = router;
