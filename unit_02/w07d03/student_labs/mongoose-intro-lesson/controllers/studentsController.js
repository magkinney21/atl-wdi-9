// in the controllers/studentsController.js
// two dots will go out of the folder
var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;
//access to student model and prodject
//use dot . after schema a way to get to objects

//populate our index with info we start with index to get info
var studentsController = {
  index: function() {
    StudentModel.find({})
    .exec(function(err, docs) {
      if (err) { console.log(err); }
    //use docs beceaucse we are getting docs and errs to check if errs
      docs.forEach(function(doc) {
        console.log(doc);
      });
    });
  },
  show: function(req) {
    StudentModel.findOne({name: req.name})
      .exec(function(err, docs){
        if (err) {console.log(err);}//if short put on one line
          console.log(docs);
      });
  },
    update: function(req, update) {
    StudentModel.findOneAndUpdate({name: req.name}),({name: update.name}),({new:true})
    .exec(function(err, docs){
      if(err) {console.log(err);}
        console.log(docs);
//first agurment is the old thing and second is what we would like to change add true
    })
  },
  destroy:function(req) {
    StudentModel.findOneAndRemove({name: req.name})
    .exec(function(err, docs){
      if(err) {console.log(err);}
         console.log(docs);
    })
  }
};

studentsController.index();
studentsController.show({name: "becky"});
studentsController.update({name:"becky"}),({name:"Sarah"})
studentsController.destroy({name: "steve"})
//to call function/ invoke function

