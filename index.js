const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// array=[wolf,seer,villager,witch,hunter,bodyguard]

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log("-------" + socket.id+ "--------");
  socket.on('send', function (data) {
    console.log(data)
    // recorverMessage.push(data);
    io.emit('reply', data);
  })
})



http.listen(3000, () => {
  console.log('listening on *:3000');
});

// shuffle(arr);

