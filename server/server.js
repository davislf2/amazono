const express = require("express"); //
const bodyParser = require("body-parser");  //
const morgan = require("morgan");
const nodemon = require("nodemon");
const mongoose = require("mongoose");

const app = express();  //

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: false }));  //
app.use(morgan("dev"));

app.listen(3030, (err) => { //
  console.log("Server on port 3030")
});
