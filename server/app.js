// 2nd connecting up express to PG
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();
// const server = require('http').createServer(app);
const server = require('http').createServer(app)

const io = require('socket.io')(server);

server.listen(PORT, '192.168.0.59', () => {
  console.log(`Listening on ${PORT}.`)
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//routes

const productRoute = require('./routes/productRoute.js');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())


// app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api', productRoute);

// app.use('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
//   res.send('reached root route');
// });





//EVERYTHING BELOW IS SOCKET.IO RELATED

app.get('/chat',function(req,res) {
  res.sendFile(path.resolve(__dirname + '/../indexChat.html'))
})


io.sockets.on('connection', function (socket){
  let socketId = socket.id;
  let clientIp = socket.request.connection.remoteAddress;
  socket.on('chat message', function(msg){
    io.sockets.emit('chat message', msg)
<<<<<<< HEAD
=======
    
>>>>>>> 9e54530aacb5a55a6b901f19b36d0d205403144a
  })

})





module.exports = app;
