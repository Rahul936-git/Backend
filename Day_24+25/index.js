const express= require("express");
const app=express();

// const Post= require("./src/post");
const Get= require("./src/get");
const Get_findByID= require("./src/get_findByID");
const Get_Without_ID= require("./src/get_Without_ID");
const Delete= require("./src/delete");
const Patch= require("./src/patch");
// const Login = require("./src/login");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
require('dotenv').config();
// console.log(process.env) // remove this after you've confirmed it is working

const authRouter =require("./routes/auth");
const userRouter= require("./routes/user");
const commentRouter=require("./routes/comment");

const main =require("./database");
// const myModels=require("./Models/users");

const userAuth= require("./MiddleWare_day_21/userAuth");

const redisClient= require("./config/redis");
const rateLimiter= require("./MiddleWare_day_21/rateLimiter");



app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

// app.post("/register",Post);
// app.post("/login",Login);

// app.use("/",authRouter);
app.use("/auth",authRouter);

app.use("/comment",commentRouter);

// 

app.get("/info",Get);

// app.get("/user/:id",Get_findByID);            // cookies already store the id so get_Without_ID
// app.get("/user",userAuth, Get_Without_ID);
// app.delete("/user/:id",userAuth,Delete);
// app.patch("/user",userAuth,Patch);           // // sensative information is always send in body

// app.use("/",userRouter);
app.use("/user",userRouter);



// main()
// .then(async()=>{
//     console.log("connect to DB");
//     // app.listen(11000,()=>{
//     app.listen(process.env.PORT_NUMBER,()=>{
//     console.log("Listening at port 11000");
//     })
// })
// .catch((err)=>console.log(err));



const initlizeConnection = async()=>{

    try{
        // await redisClient.connect();      // connected to redis
        // console.log("conncted to Redis");

        // await main();                     // connected to mongoDB
        // console.log("connected to DB");

        await Promise.all([redisClient.connect(),main()]);  // both redisClient and main connected to parallel

        app.listen(process.env.PORT_NUMBER,()=>{          // start listening at server
        console.log("Listening at port 11000");
        })
    }
    catch(err){
        console.log("Error: "+err.message);
    }
};

initlizeConnection();
