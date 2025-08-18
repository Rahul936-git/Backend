const express= require("express");
const app=express();

const Post=require("./src/post");
const Get=require("./src/get");
const Get_findByID=require("./src/get_findByID");
const Delete=require("./src/delete");
const Patch=require("./src/patch");
const Login = require("./src/login");

const main =require("./database");
// const myModels=require("./Models/users");

app.use(express.json());

app.post("/register",Post);

app.post("/login",Login);

app.get("/info",Get);

app.get("/user/:id",Get_findByID);

app.delete("/user/:id",Delete);

// sensative information is always send in body

app.patch("/user",Patch);

main()
.then(async()=>{
    console.log("connect to DB");
    app.listen(11000,()=>{
        console.log("Listening at port 11000");
    })
})
.catch((err)=>console.log(err));