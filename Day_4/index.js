const http= require('http');

const server = http.createServer((req,res)=>{     // request,response
    res.end("Rahul Kumar Shaw");
});

server.listen(5000,()=>{                          // 5000 --> port number
    console.log("Hello I am listning at port number 5000");
})




// 🔹 `http` is a built-in module in Node.js.
// 🔹 We use it to create a server.

// ---


// 🔹 `createServer()` creates a web server.
// 🔹 It takes a function with 2 things:

// * `req`: request from client (browser)
// * `res`: response from server

// 🔹 `res.end()` sends back the message `"Rahul Kumar Shaw"` as the response.

// ---

// 🔹 `listen(5000)` means: server will run on **port 5000**.
// 🔹 The callback will run once the server starts.
// 🔹 It will show the message in the terminal:
// `Hello I am listening at port number 5000`

// ---

