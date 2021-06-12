const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
  console.log(req.body.fname);
  res.send(req.body.fname);
})

app.listen(3000, function() {
  console.log("running on server 3000");
})
