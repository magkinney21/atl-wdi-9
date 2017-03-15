var express = require('express');
var router = express.Router();


router.get('/:numberOfPizza/:pizzaSize', function(req, res, next) {
  //var numberOfPizza = 5;
  //var pizzaSize = "small";

   req.render("order.hbs ", {

   numberOfPizza:req.params.numberOfPizza,
   pizzaSize:req.params.pizzaSize

   });
});



module.exports = router
