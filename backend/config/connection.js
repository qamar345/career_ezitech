const mysql = require("mysql");
const dotenv = require("dotenv").config();

const hostname = process.env.DBHOST;
const username = process.env.DBUSER;
const pass = process.env.DBPASSWORD;
const db = process.env.DATABASE;

const connection = mysql.createConnection({
  host: hostname,
  user: username,
  password: pass,
  database: db,
});

function DataBase() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MYSQL: ", err);
      return;
    }
    console.log("Connected to MYSQL Database");
  });
}

module.exports = { connection, DataBase };
