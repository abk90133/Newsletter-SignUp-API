const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const app = express();

app.use(express.static("public"));
//it is very important to use when we want to use any local files such as CSS or Images folder

app.use(bodyParser.urlencoded({extended: true}));
//here we use the body-parser to fetch the values that the user has entered into our website
//and this above line of code is used to fetch the value from the site

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.first;
  var lastName = req.body.last;
  var email = req.body.mail;

  console.log(firstName);
  console.log(lastName, email);
});


app.listen(3000, function(){
  console.log("Port is running on 3000");
});

//Mailchimp API Key
//78e237f2d2c27d5cdff186500298b932-us18
