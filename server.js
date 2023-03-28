let express = require("express");
let app = express();
let fs = require("fs");
let FileReader = require("filereader");
let mysql = require("mysql");
let request = require("request-promise");
const axios = require("axios");
const { response } = require("express");

let server = app.listen(4545, function () {
    let host = server.address().address;
    let port = server.address().port;
  });
  
  con.connect(function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("connection successful");
    }
  });

app.get("/test", function (req, res) {
    try {
      let data =  req.body;
      res.send(data);
    } catch (error) {
      res.send("No data was received/data was not received correctly\n");
    }
});