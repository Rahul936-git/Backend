const express = require('express');
const app = express();
const { Server } = require("socket.io");
const path = require('path');

const http = require('http');

const myServer = http.createServer(app);    // handle normal http request
const io = new Server(myServer);            // handle web socket request

// how to serve this file index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

io.on("connection",(socket)=>{

//     socket.on('message',(data)=>{           // on means recieving and listening
//         // io.emit('new-message',data);        // io is handling all over who wanted to connect and (emit == send)
// // The above line message i send also return to me to avoid this use the line below
//         socket.broadcast.emit('new-message',data);
//     })

    socket.on('message',({room, msg})=>{
        // io.to(room).emit('new-message',msg);   // this message send to everyone 
        socket.to(room).emit('new-message',msg);
    });

    socket.on('join_room',(room)=>{
        socket.join(room);
    })

    socket.on('rampage',(data)=>{
        io.emit('new-message',data);
    })

    socket.on("disconnect",()=>{
        console.log("Disconnected from server");
    })
})

myServer.listen(3000,()=>{
    console.log("listening at port 3000");
})