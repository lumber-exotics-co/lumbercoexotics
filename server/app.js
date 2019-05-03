// 2nd connecting up express to PG
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();
const server = require('http').createServer(app)


const io = require('socket.io')(server);
server.listen(PORT,  () => {
  console.log(`Listening on ${PORT}.`)
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.listen(PORT, ()=>{
//   console.log('Listening on PORT 3000.')
// })
//routes

const productRoute = require('./routes/productRoute.js');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, './../index.html'));
});



// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(cookieParser())


// app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api', productRoute);

// app.use('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../index.html'));
  //   res.send('reached root route');
  // });
  
  
  
  
  
  //EVERYTHING BELOW IS SOCKET.IO RELATED

  
  
io.on('connection', function (socket){
  // console.log(socket.id);
  socket.on('chat message', msg => {
    console.log('this is msg in server', msg);
    socket.emit('chat', msg);
  })
  
})
  
  
  // server.listen(PORT, '192.168.0.59', () => {
  //   console.log(`Listening on ${PORT}.`)
  // })

 


module.exports = app;
