const express = require("express");

const Login = require("../src/login");
const Post= require("../src/post");
const Logout = require("../src/auth_logout");


const authRouter= express.Router();

// app.post("/register",Post);
   authRouter.post("/register",Post);          // "/auth/register"


// app.post("/login",Login);
   authRouter.post("/login",Login);             // "/auth/login"


   authRouter.post("/logout",Logout);           // "/auth/logout"

module.exports= authRouter;