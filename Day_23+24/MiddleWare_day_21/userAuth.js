const myModels = require("../Models/users");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis.js");

const userAuth= async(req,res,next)=>{   // MiddleWare

    try{
        console.log("Cookies:", req.cookies);

        const {token}=req.cookies;

        if(!token){
            throw new Error("Token Doesn't exists");
        }

        // const verify_payload= jwt.verify(token,"Rahul@66748");      // first verify the user by verifying cookies
        const verify_payload= jwt.verify(token,process.env.SECRET_KEY);
        
        console.log(verify_payload);

        const {_id}=verify_payload;
        if(!_id){
            throw new Error("Id is missing"); 
        }

        const findWithoutId=await myModels.findById(_id); 

        if(!findWithoutId){                // undefined
            throw new Error("user Doesn't exists");
        }

        const isBlocked= await redisClient.exists(`token:${token}`)

        if(isBlocked){
            throw new Error("Invalid token");
        }

        req.findWithoutId=findWithoutId;    // here req is a object

        next();
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=userAuth;