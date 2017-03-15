var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    res.render("index.hbs", {
    message: "Welcome to Pizza Express!"
  });
  });








module.exports = router;
