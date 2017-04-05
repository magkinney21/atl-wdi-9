// in the db/schema.js
//schema is a blueprint of what we want to our data to look like
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;
//gives use access to promise

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema;
var ProjectSchema = new Schema ({
  title: String,
  unit: String
})
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects:[ProjectSchema]
});
var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

//new contructor function
// First we create a new student. It's just like generating a new instance of a constructor function!
// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// frankie.projects.push(project1);
// // Then we save it to the database using .save
// frankie.save(function(err, student){
//   //call back function with first argument err and student as seconde
//   if (err) { console.log(err); } //if simple write on one line and you dont need else

//   // else {
//      console.log(student);
//   // }
// });
//same constructor just different thing
// StudentModel.create({ name: 'Frankie P.', age: 30 }, function (err, student) {
//   if (err) {
//     console.log(err);
  // }
//   else {
//     console.log(student);
//   }
// });

module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};

