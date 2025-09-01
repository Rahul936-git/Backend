// const radisClient= require("../config/redis");

// const rateLimiter = async(req,res,next)=>{

//     try{
//         // const ip_address = req.ip;
//         const ip_address= req.ip ? req.ip.toString() : "unknown_ip_address";
//         console.log(ip_address);        // ::1 → means the requests are coming from localhost (IPv6 loopback).
    
//         const count = await radisClient.incr(ip_address);     // NOTE: without await it show "Promise { <pending> }"

//         if(count > 18){                             // number of request
//             throw new Error("user Limit Exceed");
//         }

//         if(count==1){
//             // await radisClient.expire(3600)                          // 60 minutes
//             await radisClient.expire(ip_address, 3600);
//         }

//         console.log(count);

//         next();
//     }
//     catch(err){
//         // res.send("Error: "+err.message);                     // sending a response back to the client (res.send, res.json, res.end, etc.).
//         // res.status(429).send("Error: "+err.message);           // 429 Too Many Requests
//         res.status(429).json({Error:err.message});
//     }
// }

// module.exports= rateLimiter;






// /////////////////////////////////////////////////  Day_26  ////////////////////////////////



// rateLimiter with sliding window

const radisClient= require("../config/redis");

// Total time = 60 minutes

const windowSize = 3600;   // 60 minutes
const maxRequest = 60;

const rateLimiter = async(req,res,next)=>{

    try{
        const key = `IP:${req.ip}`;         // ip_address_Key
        const current_time = Date.now()/1000;    //milisecond
        const window_time = current_time - windowSize;

        // Remove all old requests outside the time window
        await radisClient.zRemRangeByScore(key,0,window_time);     // Range query formate

        // Count remaining requests in the window
        const numberOfRequest = await radisClient.zCard(key);  // zCard => total number of request / count kitni hai

        if(numberOfRequest >= maxRequest){
            throw new Error("Number of Request Exceed");
        }

        // Add current request with timestamp
        await radisClient.zAdd(key,[{score:current_time,value:`${current_time}:${Math.random()}`}])    // use crypto library instead of Math.random() for genrating random libraray
        //  key TTL (total time to leave) hai usko increase karna

        // Set TTL if first request
        if(numberOfRequest === 0)
        await radisClient.expire(key,windowSize);

        next();  // move request forward
    }
    catch(err){
        // res.send("Error: "+err.message);                     // sending a response back to the client (res.send, res.json, res.end, etc.).
        // res.status(429).send("Error: "+err.message);           // 429 Too Many Requests
        res.status(429).json({Error:err.message});
    }
}

module.exports= rateLimiter;