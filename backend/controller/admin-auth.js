const { connection } = require("../config/connection");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const secretKey = process.env.SECRETKEY;

const AdminAuth = (req, res) => {
  const { email, password } = req.body.value;

  const sql =
    "SELECT * FROM `admin_accounts` WHERE `email` = ? AND `password` = ?";
  connection.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      if (data.length > 0) {
        const token = jwt.sign({ email: data[0].email }, secretKey, {
          expiresIn: 86400,
        });
        return res.json({ isLoggedIn: true, user: data, token });
      } else {
        return res.json({ isLoggedIn: false });
      }
    }
  });
};

module.exports = { AdminAuth };
