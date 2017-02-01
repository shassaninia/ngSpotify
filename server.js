var express = require('express');

var app = express();

/* /css matches the route and public tells where the css folder is located */
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));


var server = require('http').createServer(app);


server.listen(process.env.PORT || 3000);

// When the root director is requested, return the index.html page.
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
