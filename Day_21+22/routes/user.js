const express= require("express");

const Get_findByID= require("../src/get_findByID");
const Get_Without_ID= require("../src/get_Without_ID");
const Delete= require("../src/delete");
const Patch= require("../src/patch");

const userAuth= require("../MiddleWare_day_21/userAuth");

const userRouter= express.Router();

    // app.get("/user/:id",Get_findByID);            // cookies already store the id so get_Without_ID
// userRouter.get("/user/:id",Get_findByID);            // cookies already store the id so get_Without_ID
userRouter.get("/:id",Get_findByID);            // cookies already store the id so get_Without_ID


    // app.get("/user",userAuth, Get_Without_ID);
// userRouter.get("/user",userAuth, Get_Without_ID);
userRouter.get("/",userAuth, Get_Without_ID);


    // app.delete("/user/:id",userAuth,Delete);
// userRouter.delete("/user:id",userAuth,Delete);
userRouter.delete("/:id",userAuth,Delete);


    // app.patch("/user",userAuth,Patch); 
// userRouter.patch("/user",userAuth,Patch); 
userRouter.patch("/",userAuth,Patch); 




module.exports= userRouter;