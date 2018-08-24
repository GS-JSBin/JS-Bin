const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const adminRouter = express.Router();
const binRouter = express.Router();
const path = require('path');
const db = require('./db/')

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

binRouter.get(':name', (req, res, next) => {
    if(req.params.name.split('.')[req.params.name.split('.').length - 1] === 'js' || req.params.name.split('.')[req.params.name.split('.').length - 1] === 'map') {
        next('route');
    } 
    if (db.findOne(res.params.name)) {
        res.json(db.findOne(res.params.name));
    } else {
        res.status(404).json({ error: 'This bin does not exist!!!' });
    }
})

binRouter.use(express.static('build/bin'));

app.post('/createNewBin', (req, res) => {
    
})

app.post('/', res.status(404))

app.use((req,res) => {
    res.sendStatus(404)});

http.listen(3000, function() {
    console.log("Listening on Port 3000");
});