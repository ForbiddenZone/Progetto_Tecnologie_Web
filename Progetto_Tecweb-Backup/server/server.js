const http = require('http');
const socketio = require('socket.io');

const app = require('express')();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["data-from-twitter"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  var dati_da_admin;
  socket.on('choose_games', (lista_giochi) => {
    //mando i giochi scelti al giocatore
    console.log(lista_giochi);
    dati_da_admin = lista_giochi;
    socket.emit('return_data', lista_giochi);
  });
  socket.emit('test', "porcodio");
});

//server run
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('server listening on port 3000'));
