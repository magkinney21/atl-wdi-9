var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

var indexController = require(__dirname + '/controllers/index_controller.js');
app.use("/", indexController);

var toppingsController = require(__dirname + '/controllers/toppings_controller.js');
app.use("/topping", toppingsController);


var orderController = require(__dirname + '/controllers/order_controller.js');
app.use("/order", orderController);


// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
