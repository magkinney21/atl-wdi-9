var express = require("express");
var app = express();
// var hbs = require("hbs");
// app.set("view engine", "hbs");


app.get('/math/:operator', function(req, res) {


var number1 = parseInt(req.query.num1)
var number2 = parseInt(req.query.num2)
var operator = req.params.operator

var sum = (number1 + number2);

  res.send(sum.toString());

// res.render('math.hbs');
 });
app.get('/greeting/:name', function(req, res) {
 var name1 = (req.query.name)
 var greeting1 = (req.query.greeting)
 var customGreeting = (`oooo hey  ${req.query.greeting1} ${req.query.name1}.`)
//var name = req.query.name;
res.send(customGreeting)
});

app.get('/reverse', function(req, res) {
 var words = (req.query.words)
 res.send(words.reverse());

});
var port = process.env.PORT || 3000;

app.listen(port, function(){

console.log("listing to port")

});
