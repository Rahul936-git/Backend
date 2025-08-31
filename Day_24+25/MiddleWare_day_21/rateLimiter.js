const radisClient= require("../config/redis");

const rateLimiter = async(req,res,next)=>{

    try{
        // const ip_address = req.ip;
        const ip_address= req.ip ? req.ip.toString() : "unknown_ip_address";
        console.log(ip_address);        // ::1 → means the requests are coming from localhost (IPv6 loopback).
    
        const count = await radisClient.incr(ip_address);     // NOTE: without await it show "Promise { <pending> }"

        if(count > 18){                             // number of request
            throw new Error("user Limit Exceed");
        }

        if(count==1){
            // await radisClient.expire(3600)                          // 60 minutes
            await radisClient.expire(ip_address, 3600);
        }

        console.log(count);

        next();
    }
    catch(err){
        // res.send("Error: "+err.message);                     // sending a response back to the client (res.send, res.json, res.end, etc.).
        // res.status(429).send("Error: "+err.message);           // 429 Too Many Requests
        res.status(429).json({Error:err.message}); 
    }
}

module.exports= rateLimiter;