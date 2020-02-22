const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("<h1>Hey Socket.io</h1>");
});

recorverMessage=[];

http.listen(3000, () => {
  console.log("listening on *:3000");
});

user=[]

io.on("connection", (socket) => {
  console.log( socket.id +"--------connected---------");


  if (socket.id!="" && recorverMessage.length!=0 ) {
    // recorverMessage.map(eachVaule=>{
    //   io.emit('roomRecover',eachVaule)
    // })
    io.emit('roomRecover',recorverMessage)
    console.log("Does someone new entered ?")
    console.log("-")
    console.log(recorverMessage)
    console.log("-")
    // user.push(socket.id)
  }
 
  socket.on('send', function (data) {
   
    console.log(data)
    recorverMessage.push(data);
    io.emit('my broadcast',data);
    }
  );

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
