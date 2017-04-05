var express = require('express');
var router = express.Router();
var data = require('../data.js');

router.get ('/', function(req, res) {

  res.render('/index', {
    todonts: data.seededToDonts
  });
});

module.exports = router;
