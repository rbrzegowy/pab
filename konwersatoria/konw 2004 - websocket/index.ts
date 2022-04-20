import express from 'express';
import ws from 'ws';
import http from 'http'

const app = express()
const server = http.createServer(app)

const wsServer = new ws.Server({ server })

wsServer.on('connection', (socket: ws) => {
    socket.send('Hello from WebSocket');
    socket.on('message', (message: string) => {
        console.log(`New message: received: ${message}`);
        // socket.send(`Hello, you sent -> ${message}`);
        wsServer.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(`${message}`);
            }
        });
    });

});

server.listen(3001, () => {
    console.log('Server started (ws://3001)');
});