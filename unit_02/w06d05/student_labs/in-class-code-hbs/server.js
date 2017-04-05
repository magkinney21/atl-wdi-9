/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
var todosController = require('./controllers/todos.js');
var todontsController = require('./controllers/todonts_Controller.js');
var morgan = require('morgan');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

// log
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( logger('dev'));
app.use('/todos', todosController);
app.use('/todonts', todontsController)
app.use(morgan('combined'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
