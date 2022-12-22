

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
const io = require('socket.io')(server, { cors: true });

io.on("connection",socket=>{
    // console.log(socket.id)
    socket.on('text',data=>{
        io.emit('text',data);
        console.log(data)
    });
})
// require('./config/mongoose.config'); //copy This is new

// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })

