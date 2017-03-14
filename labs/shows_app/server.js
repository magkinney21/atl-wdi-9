var express = require('express'); // Loading the express module on our server
//we inquried it
var app = express(); // Create a new instance of express on our server
//invoked express
var hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/shows', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    var faveShows = ["Grimm", "Walking-Dead", "Preacher", "Sherlock", "Crazy-heads", "Mad-Men"];

    res.render('shows', {
        data: faveShows

      });

});











var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000
console.log("listening on port 3000");
});
