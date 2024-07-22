const express = require("express");
const { ApplyNow } = require("../controller/apply-controller");
const {
  GetLatestApplicants,
  GetSingleApplicant,
} = require("../controller/get-applicant");
const { AdminAuth } = require("../controller/admin-auth");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

const router = express.Router();

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.json({ tokenMessage: "Token not provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.json({ authMessage: "Failed to authenticate token" });
    }

    req.email = decoded.email;
    next();
  });
}

router.get("/", (req, res) => {
  return res.send("Hello From Node Server");
});

router.post("/apply-now", ApplyNow);

// Admin
router.post("/admin-auth", AdminAuth);
router.get("/get-latest", verifyToken, GetLatestApplicants);
router.get("/get-all-applicants", verifyToken, GetLatestApplicants);
router.get("/get-single-applicant/:id", verifyToken, GetSingleApplicant);

module.exports = router;
