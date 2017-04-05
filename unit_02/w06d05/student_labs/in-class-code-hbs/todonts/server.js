/* packages */
var path        = require('path');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
var todontsController = require('./controllers/todonts_Controller.js');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

// log
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/todonts', todontsController)

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
