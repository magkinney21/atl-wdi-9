//your code here
var express = require('express');
var app     = express();
var port    = 3000;
var hbs = require('hbs')
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public/css'));

app.set("view engine", "hbs");

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates_controller.js');

app.use("/pirates", pirateController);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('homepage');
});

app.listen(port, function(){
  console.log("===========================")
  console.log('Andre' + port);
  console.log("===========================")
});
