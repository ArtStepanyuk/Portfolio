"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const SENDGRID_KEY =  require('./keys.js').SENDGRID_KEY

// Setup server
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', '/dist/PortfolioAG7')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

var server = http.createServer(app);
var cors = require("cors");
app.use(cors());

app.post("/email", function(req, res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(SENDGRID_KEY);
  const msg = {
    to: "lmasamunel1988@gmail.com",
    from: req.body.email,
    subject: req.body.name,
    text: req.body.text,
    html: req.body.text,
  };
  console.log('sending')
  sgMail.send(msg)
    .then(_ => res.end())
    .catch(err => res.send(err)) ;
});

app.route("/*").get((req, res) => {
  console.log(path.join(__dirname, '..', '/dist/PortfolioAG7/index.html'))
  res.sendFile(path.join(__dirname, '../dist/PortfolioAG7/index.html'))
});



// Start server
server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

