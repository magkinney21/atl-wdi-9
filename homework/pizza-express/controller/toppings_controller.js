var express = require('express');
var router = express.Router();

router.get('/:type', function(req, res, next) {
  //var toppingType= "chicken";
// app.get('/topping/:type', function(req, res, next) {
// var toppingType1 = (req.query.type);
//     res.send(toppingType1 + " pizza! Good choice!");
// });
// (this also works with url like this http://localhost:3000/topping/type/?type=chicken)

    res.render( 'toppings.hbs', {
     topping: req.params.type
    });
});




module.exports = router;
