const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ server: http });

// wss.on("connection", (socket) => {
//     socket.on("disconnect", () => {
//         console.log("Desconectado: " + socket.id);
//     });

//     socket.on("getRecebimento", (data) => {
//         console.log(data.recebimentos);
//     });

// })

// wss.on('connection', (socket) => {
//     console.log("A new client Connected!");

//     socket.send("Welcome New Client!");
//     socket.on("message", (message) => {
//         console.log("Received: %s", message);
//         socket.send("Got your msg its: " + message);
//     });

// });

io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log("Desconectado: " + socket.id);
    });

    socket.on("confirmConnection", (data) => {
        console.log("Conectado: " + data.message);
        socket.emit("responseConnection", { message: "Respondendo a conexão" });
    });
});

app.get('/', (req, res) => {
    res.send("Hello World!");
})


http.listen(3030, () => {
    console.log("App rodando!");
});
