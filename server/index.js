const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// prevent the possible connection bugs //
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

// socket parameter keeps every information of connection processes //
io.on("connection", (socket) => {
    console.log("- user connected :", socket.id);

    io.on("disconnect", ()=> {
        console.log("- user disconnected");
    });
})

// start to listen 3001 port for backend process //
server.listen('3001', () => {
    console.log("# server has been activated");
})