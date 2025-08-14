const express = require('express');
const app = express();

// app.use("/user",(req,res)=>{
//     res.send("Hello!")
// })

// // Route Handler ====>  app.use(route,[RH,RH,RH,RH]);  or without array or  app.use(route,RH,[RH,RH,RH,RH]


// app.use("/user",[(req,res,next)=>{
//     console.log("first");                    // 1st
//     // res.send("Hello ji");
//     next();
//     // console.log("Four");                     // 6th
// },
// (req,res,next)=>{
//     console.log("second");                   // 2nd
//     // res.send("Hello ji 2");
//     next();
//     // console.log("five");                    // 5th
// },
// (req,res)=>{
//     console.log("Third");                    // 3rd
//     res.send("Hello ji 3");
//     // console.log("six");                      // 4th
// }]
// )


// // we can define middleware functions separately and then pass them together like this
// // MiddleWare: Mw->Mw->Mw->RequestHandler


// app.use("/user",(req,res,next)=>{                            // middleware
//     console.log("first");                    // 1st
//     // res.send("Hello ji");
//     next();
//     // console.log("Four");                     // 8th
// }),
// app.use("/user",(req,res,next)=>{                            // middleware
//     console.log("second");                   // 2nd
//     // res.send("Hello ji 2");
//     next();
//     // console.log("five");                    // 7th
// }),
// app.use("/user",(req,res,next)=>{                            // middleware
//     console.log("Third");                    // 3rd
//     // res.send("Hello ji 3");
//     next();
//     // console.log("six");                      // 6th
// }),

// app.use("/user",(req,res)=>{                                //RequestHandler
//     console.log("Fourth");                      // 4th
//     res.send("Hello ji 4");
//     console.log("last");                        // 5th
// })


// // Maintain logs

// app.get("/user",(req,res)=>{
//     res.send("Info about user");
// })

// app.post("/user",(req,res)=>{
//     res.send("Post Info Saved");
// })

// app.delete("/user",(req,res)=>{
//     res.send("Info Deleted");
// })


// app.get("/user",(req,res)=>{
//     console.log(`${Data.now()} ${req.method} ${req.url}}`);
//     res.send("Info about user");
// })

// app.post("/user",(req,res)=>{
//     console.log(`${Data.now()} ${req.method} ${req.url}`);
//     res.send("Post Info Saved");
// })

// app.delete("/user",(req,res)=>{
//     console.log(`${Data.now()} ${req.method} ${req.url}`);
//     res.send("Info Deleted");
// })


// // Maintain logs through middleware

// // Request ka Log ko maintain karta
// // Timing or Kis type ki request thi, URL


app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // // Authorization wagera kar sakta hu
    next();
    // 30 line of code
})

app.get("/user",(req,res)=>{
    res.send("Info about user");
})

app.post("/user",(req,res)=>{
    res.send("Post Info Saved");
})

app.delete("/user",(req,res)=>{
    res.send("Info Deleted");
})

app.listen(7000,()=>{
    console.log("listening at port number 7000");
})