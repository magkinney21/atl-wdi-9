//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:

//===========================
var express = require("express");
var app = express();
var hbs = require('hbs');

//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set("view engine", "hbs");

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')

var pirateController = require('./controllers/pokemon.js');
app.use("/pokemon", pokemonController);



//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000, function(req, res){
  console.log("listening");
});
