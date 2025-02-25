const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



http.listen(3000, function() {
  console.log('Listening on port 3000');
})

// Handle a new connection
io.on('connection', function(socket) {


socket.on('new circle', function(socket){
io.emit('new circle', clientCircle)
})


})