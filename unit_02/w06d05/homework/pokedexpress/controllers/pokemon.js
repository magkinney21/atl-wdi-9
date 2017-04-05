//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require("express");


// Set express Router to a variable called router:
var router = express.Router();
// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:

var data = require('../poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images

route.get('/', function(req, res){

res.render('/index'){
  pokemon : poke_array.img
};
});



// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.

router.get('/index/:index',function(req, res){
  var pokemonInfo = data.poke_array[req.params.id];
  res.render('poke_array/show', {
    pokemonInfo: pokemonInfo,.;
  });
});




// Make a GET route '/new' that will simply render a form to create a new Pokemon







//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon


//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.


module.exports = router;
//===========================
// LISTENERS
//===========================
// app.listen(3000, function(req, res){
//   console.log("listening");
// });
