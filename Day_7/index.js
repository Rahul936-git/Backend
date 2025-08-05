const express = require('express');
const app = express();

// app.use("/user",(req,res)=>{
//     res.send({name:"Rahul"})
// })

app.use(express.json());   // parsing karani hoti hai  (conversion)
// middleware : jsonFormate(stringFormate or textBased data) data => JS object

app.get("/user",(req,res)=>{
    // console.log(req);
    res.send({name:"Rahul"})
})

app.post("/user",(req,res)=>{
    // console.log("Data saved succesfully");

    console.log(req.body);
    res.send("Data saved succesfully");
})

//  get , post , patch ,put ,delete 

app.listen(2000,()=>{
    console.log("listen to 2000 port");
})