const express = require("express");
const cors = require("cors");
const { DataBase } = require("./config/connection");
const router = require("./routes/app-routes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.static('dist'));


const app = express();
app.use(bodyParser.json({ limit: "35mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "35mb", extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    allowMethods: "*",
  })
);
app.use(router);
DataBase();

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});
