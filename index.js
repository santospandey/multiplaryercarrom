var express = require('express');
var socket = require('socket.io');

var app = express();

app.use("/", express.static(__dirname + '/static'));

// app.use('/serve',  function(req, res){
//     res.json({'hello': 'world'});
// });

var server = app.listen(4000, function(){
    console.log('server is listening at port 4000');
});

//socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection');    
});