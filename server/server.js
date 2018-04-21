const express = require("express"); //
const bodyParser = require("body-parser");  //
const morgan = require("morgan");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");

const app = express();  //

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: false }));  //
app.use(morgan("dev"));
app.use(cors());

// console.log("What happen");
mongoose.connect(config.dbUrl, (err) => {
  if(err){
    console.log("Error:"+err);
  }else{
    console.log("Connect to MongoDB");
  }
});

app.get("/", (req, res, next) => {
  res.json(
    {"user":"davis"}
  )
});

app.listen(config.port, (err) => { //
  console.log("Server on port "+config.port);
});
