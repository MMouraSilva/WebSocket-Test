const express = require("express");
const app = express();
const http = require("http").createServer(app);
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server: http });

// wss.on("connection", (socket) => {
//     socket.on("disconnect", () => {
//         console.log("Desconectado: " + socket.id);
//     });

//     socket.on("getRecebimento", (data) => {
//         console.log(data.recebimentos);
//     });

// })

wss.on('connection', (socket) => {
    console.log("A new client Connected!");

    socket.send("Welcome New Client!");
    socket.on("message", (message) => {
        console.log("Received: %s", message);
        socket.send("Got your msg its: " + message);
    });

});

app.get('/', (req, res) => {
    res.send("Hello World!");
})


http.listen(3030, () => {
    console.log("App rodando!");
});
