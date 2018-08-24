const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
    socket.on('updatedCode', function(newCode) {
        socket.broadcast.emit('codeUpdate', newCode);
    });

    socket.on('updatedTerminal', function(terminalText) {
        socket.broadcast.emit('terminalUpdate', terminalText);
    });
});


http.listen(3000, function() {
    console.log("Listening on Port 3000");
});