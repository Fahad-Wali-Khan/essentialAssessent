// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", (req, res) => {
  const str =
    "https://api.polygon.io/v1/open-close/" +
    req.body.name +
    "/" +
    req.body.date +
    "?adjusted=true&apiKey=Odq61s_5tD4fpW2MvvQV3z6bsdKi175i";
  axios
    .get(str)
    .then(function (response) {
      const data = {
        open: response.data.open,
        close: response.data.close,
        high: response.data.high,
        low: response.data.low,
      };
      res.send(data);
    })
    .catch(function (error) {
      const e = { message: "error" };
      res.send(e);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
