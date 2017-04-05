//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');
var router = express.Router({mergeParams: true});
//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user

router.post('/', function createLists(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newList = {
        name: req.body.name,
        completed: req.body.completed
      }

      user.Lists.push(newList)

      newList.save(function (err) {
        if (err) console.log(err);
        console.log('List Created')
      });

      res.redirect('/users')
    });
});
//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page

router.get('/:id/edit', function editLists(req, res) {
   User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    const Lists = user.Lists.id(req.params.id);
    res.render('/list/edit.hbs' , {
      Lists: Lists
    });
  });
});
//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.


//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item


//======================
// EXPORTS
//======================
module.exports = router;
