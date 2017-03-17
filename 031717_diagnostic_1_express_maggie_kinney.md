1) helps pass around data
2) get lets you read and post is to create
3) lets you get the info for packages
4) create read update and delete post, get, put , delete
5) we could create the new data in new.hbs or show.hbs post is the method
6) returns or sets the action of the attribute in the form ????
7) route.post ('/menus', function(req , res ) {
    var newMenu = {
        data: req.body.data,
    };
      data.push(Newmenu);
    res.redirect('/homepage');
});
8) route.get('/artist/:id, function (req, res ){
  var song = data.seededSongs[req.params.id];
  res.render('artist/:id', {
    song: song
    });
  });

})
9) model view controller - we have been making controllers to ridirect/route the data to specific controllers to make our
code dryer and to have the server.js be more of a page to just delegate where the data will be stored instead of having all the data on that one server.js page

