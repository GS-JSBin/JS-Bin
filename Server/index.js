const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const adminRouter = express.Router();
const binRouter = express.Router();
const path = require('path');
const fs = require('fs');
const db = require('./db/bins.js')

app.use('/admin', adminRouter);
app.use('/bin', binRouter);

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

app.get('/webworker/:name', (req, res) => {
    fs.writeFile(path.resolve(__dirname, 'build/webworkers/', req.params.name), function() {
        res.sendFile(path.resolve(__dirname, 'build/webworkers/', req.params.name));
    });
});

binRouter.get('/:name', (req, res, next) => {
    if(req.params.name.split('.')[req.params.name.split('.').length - 1] === 'js' || req.params.name.split('.')[req.params.name.split('.').length - 1] === 'map' || req.params.name.split('.')[req.params.name.split('.').length - 1] === 'css') {
        return next('route');
    } 
    if (db.findOne(req.params.name)) {
        res.sendFile(path.resolve(__dirname, '../build/bin/index.html'));
        //TODO make route /:name/json that returns json from db res.json(db.findOne(req.params.name));
    } else {
        res.status(404).json({ error: 'This bin does not exist!!!' });
    }
})

binRouter.use(express.static('build/bin'));

app.post('/', (req, res) => res.status(404))

app.use((req,res) => {
    res.sendStatus(404)});

http.listen(3000, function() {
    console.log("Listening on Port 3000");
});