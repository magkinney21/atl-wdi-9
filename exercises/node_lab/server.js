var http = require('http');
var urlParser = require('url'); // Adds urlParser
var server = http.createServer().listen(3001);
console.log('I\'m listening on port: 3001');
server.on('request', function(request, response) {
    var urlObj  = urlParser.parse( request.url ); //
    var pathname = urlObj.pathname; // parsing our the important info in the url
    response.writeHead(200, {'Content-Type': 'text/html'});
    console.log("requested: " + pathname);
    console.log(pathname === '/fun-times');
    if (pathname === "/fun-times") {
        response.write('<html><ul><li>Play Guitar</li></ul></html>');
    }
    else if (pathname === "/") {
        response.write('<html>Good story, friend.');
        response.write('<script>console.log(\'Sooooooo\');</script>');
        response.write('</html>');
    }
    console.log(request.url);
    response.end();
});
