var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;


app.get('/', function(req, res) {

  res.send("Welcome to Pizza Express!");

});
// app.get('/topping/:type', function(req, res, next) {
// var toppingType1 = (req.query.type);
//     res.send(toppingType1 + " pizza! Good choice!");
// });
// (this also works with url like this http://localhost:3000/topping/type/?type=chicken)



app.get('/topping/:chicken', function(req, res, next) {
  var toppingType= "chicken";
    res.send( toppingType + " pizza! Good Choice" );
});

app.get('/order/:5/:small', function(req, res, next) {
  var numberOfPizza = 5;
  var pizzaSize = "small";

   res.send("Your order for " + numberOfPizza + " " + pizzaSize + " will be ready in 10 min!" );
});
// also could use back tick `` instead of concatenation










// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
