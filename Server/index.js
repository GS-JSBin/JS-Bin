const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const adminRouter = express.Router();
const binRouter = express.Router();
const path = require('path');

app.use('/admin', adminRouter);

io.on('connection', function(socket) {
    socket.on('updatedCode', function(newCode) {
        socket.broadcast.emit('codeUpdate', newCode);
    });

    socket.on('updatedTerminal', function(terminalText) {
        socket.broadcast.emit('terminalUpdate', terminalText);
    });
});

adminRouter.use(express.static('build/admin'));
adminRouter.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'build/admin/index.html'))
})

app.post('/')

// app.use('/', express.static('build'))


http.listen(3000, function() {
    console.log("Listening on Port 3000");
});