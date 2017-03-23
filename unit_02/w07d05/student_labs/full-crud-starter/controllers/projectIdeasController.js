
var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require("../models/projectIdea");

// PROJECT IDEA INDEX ROUTE
router.get('/', function indexProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function(err, user){
      if (err) { console.log(err); }
      res.render('projectIdeas/index.hbs', {
        user: user
      });
    });
});

// EDIT

router.get('/:id/edit', function editProjectIdea(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.projectIdeas.id(req.params.id);

      res.render('projectIdeas/edit', {
        projectIdea: projectIdea,
        user: user
      });
    });
});

// UPDATE
router.put('/:id', function updateProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.project_ideas.id(req.params.id);

      projectIdea.description = req.body.description
      projectIdea.in_progress = req.body.in_progress
      user.save();

      res.render('projectIdeas/show', {
        projectIdea: projectIdea,
        user: user
      });
    });
});


// NEW

router.get('/new', function newProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }
      res.render('projectIdeas/new', {
        user: user
      });
    });
});

// CREATE

router.post('/', function createProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newProjectIdea = {
        description: req.body.description,
        in_progress: req.body.in_progress
      }

      user.project_ideas.push(newProjectIdea)

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Project Idea created')
      });

      res.redirect('/users')
    });
});

// DELETE

router.delete('/:id', function deleteProjectIdea(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.project_ideas.id(req.params.id).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Project Idea was removed')
      });

      res.render('projectIdeas/index', {
        user: user
      });
    });
});


// SHOW

router.get('/:id', function showProjectIdea(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.project_ideas.id(req.params.id);
      res.render('projectIdeas/show', {
        projectIdea: projectIdea,
        user: user
      });
    });
});

module.exports = router;
