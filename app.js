const express = require('express');
const http = require('http')
const socketIO = require('socket.io')
const { Client, LocalAuth } = require('whatsapp-web.js')
const bodyParser = require('body-parser')
const fs = require('fs')
const router = require('./src/router/index')
const listeners = require('./src/handler/listeners')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
        origin: "*"
    }
})

const client = new Client({
    restartOnAuthFail: true,
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
        ],
    }
});
client.initialize();

const onConnection = (socket) => {
    socket.emit('message', 'Socket Connected !')
    listeners(io, socket, client);
}
io.on('connection', onConnection)
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/api', router)
server.listen(1337, () => console.log('Server Runing On Port 1337'))