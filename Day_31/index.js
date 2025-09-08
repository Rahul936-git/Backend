const express = require('express');
const app = express();
const { Server } = require("socket.io");

// app.get("/",(req,res)=>{    // handle normal http request

// })

// const myServer = app.listen(3000,()=>{         
//     console.log("listening at port 3000");
// })

// const io = new Server(myServer);    // handle web socket request    // may be it not attach with server so follow below method

const http = require('http');

const myServer = http.createServer(app);    // handle normal http request
const io = new Server(myServer);            // handle web socket request

io.on("connection",(socket)=>{

    socket.on('message',(data)=>{           // on means recieving and listening
        io.emit('new-message',data);        // io is handling all over who wanted to connect and (emit == send)
    })

    socket.on("disconnect",()=>{
        console.log("Disconnected from server");
    })
})

myServer.listen(3000,()=>{
    console.log("listening at port 3000");
})