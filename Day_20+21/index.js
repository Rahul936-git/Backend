const express= require("express");
const app=express();

const Post= require("./src/post");
const Get= require("./src/get");
const Get_findByID= require("./src/get_findByID");
const Get_Without_ID= require("./src/get_Without_ID");
const Delete= require("./src/delete");
const Patch= require("./src/patch");
const Login = require("./src/login");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");


const main =require("./database");
// const myModels=require("./Models/users");

const userAuth= require("./MiddleWare_day_21/userAuth");

app.use(express.json());
app.use(cookieParser());

app.post("/register",Post);

app.post("/login",Login);

app.get("/info",Get);

app.get("/user/:id",Get_findByID);  // cookies already store the id so get_Without_ID

app.get("/user",userAuth, Get_Without_ID);

app.delete("/user/:id",userAuth,Delete);

// sensative information is always send in body

app.patch("/user",userAuth,Patch);

main()
.then(async()=>{
    console.log("connect to DB");
    app.listen(11000,()=>{
        console.log("Listening at port 11000");
    })
})
.catch((err)=>console.log(err));