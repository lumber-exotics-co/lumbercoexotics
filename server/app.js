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

server.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}.`)
})

io.on('connection', function (socket){
  socket.on('chat message', function(msg){
    io.sockets.emit('chat message', msg)
  })

})





module.exports = app;
