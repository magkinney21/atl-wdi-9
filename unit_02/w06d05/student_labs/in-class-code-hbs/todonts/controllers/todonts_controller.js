var express = require('express');
var router = express.Router();
var data = require('../data.js');

router.get ('/', function(req, res) {

  res.render('todonts/index', {
    todonts: data.seededToDonts
  });
});
router.get('/:id', function(req, res){
  var todonts = data.seededToDonts[req.params.id];
    res.render('todonts/show', {
      todonts : todonts

    });
});
router.post('/', function(req, res){
  var newToDonts = {
    description: req.body.description,
    urgent: req.body.urgent
  };
});
module.exports = router;
