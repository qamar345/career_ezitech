const express = require("express");
const { ApplyNow } = require("../controller/apply-controller");

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Hello From Node Server");
});

router.post("/apply-now", ApplyNow);

module.exports = router;
