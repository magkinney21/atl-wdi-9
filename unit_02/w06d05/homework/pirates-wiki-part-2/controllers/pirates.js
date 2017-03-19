//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates

	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
// router.get('/:id', function(req, res){

// 	//grab the pirate by id
// 	var showPirate = pirates[req.params.id];

// 	res.render("pirates/show.hbs", {
// 		pirate: showPirate
// 	});
// });


//==============================
// CREATE
//==============================
router.post('/', function(req, res) {
  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  }

  pirates.push(newPirate);
  res.redirect('/pirates');
});
//==============================
// UPDATE
//==============================
router.get('/:id/edit', function(req, res) {
  res.render('edit.hbs', {
    pirate: pirates[req.params.id],
    id: req.params.id
  });
});

router.put('/:id', function (req, res){
  var piratesEdit = pirates[req.params.id];

  piratesEdit.name = req.body.name,
  piratesEdit.birthplace = req.body.birthplace,
  piratesEdit.yearOfDeath = req.body.pirate.death_year,
  piratesEdit.base = req.body.base,
  piratesE.nickname = req.body.nickname

  res.redirect('/pirates');
});

//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res) {
  pirates.splice(req.params.id, 1);

  res.redirect('/pirates');  // redirect back to the index route
});

router.get('/:id', function(req, res) {
  res.render('pirates/show.hbs', {
    pirate: pirates[req.params.id]
  });
});




//==============================
// EXPORTS
//==============================

module.exports = router;
