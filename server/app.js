// 2nd connecting up express to PG
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();
const server = require('http').createServer(app)

const io = require('socket.io')(server);

<<<<<<< HEAD
server.listen(PORT, '192.168.0.221', () => {
  console.log(`Listening on ${PORT}.`)
})

=======
>>>>>>> 88f70ec89a5da651e993b21d0b115fbb20705650
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(PORT, ()=>{
  console.log('Listening on PORT 3000.')
})
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
  
  
  io.on('connection', function (socket){


    socket.on('chat message', function(msg){
      io.emit('chat message', msg)
      
    })
    
  })
  
  
  // server.listen(PORT, '192.168.0.59', () => {
  //   console.log(`Listening on ${PORT}.`)
  // })




module.exports = app;
