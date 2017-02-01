var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


var server = require('http').createServer(app);


server.listen(process.env.PORT || 3000);

// When the root director is requested, return the index.html page.
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
