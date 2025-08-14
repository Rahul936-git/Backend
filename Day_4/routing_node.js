const http = require('http');

// Routing Server
const server1 = http.createServer((req, res) =>{

    if(req.url === "/"){
        res.end("This is / req url");
    }

    else if(req.url === "/contact"){
        res.end("This is contact page");
    }

    else if(req.url === "/about"){
        res.end("This is About page");
    }

    else{
        res.end("Error: page not found");
    }
});

server1.listen(4000, () =>{
    console.log("Welcome to routing page");
});
