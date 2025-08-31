// const Logout = async (req, res) => {
//   try {
//     res.clearCookie("token");                   // Clear the JWT cookie
//     res.send("Logout Successfully");
//   } catch (err) {
//     res.send("Error: " + err.message);
//   }
// };

// module.exports = Logout;



// /////////////////////////////////////////////////////////////////////////////////////////



// const Logout= async(req,res)=>{
//   try{
//     res.cookie("token","nnhuigyftyftyvvuyvyiguivi");
//     res.send("Logout Successfully");
//   }catch(err){
//     res.send("Error: "+err.message);
// }
// }

// module.exports= Logout;



// ///////////////////////////////////////////////////////////////////////////////////////////



const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");


const Logout= async(req,res)=>{
  try{

    const {token}= req.cookies;

    const payload= jwt.decode(token);

    await redisClient.set(`token:${token}`,"Blocked");                // Block token in redis database
    // await radisClient.expire(`token:${token}`,1800);                // expire after 30 minute from current time
    await redisClient.expireAt(`token:${token}`,payload.exp);   // expire it after calcuating time from 1970

    res.cookie("token",null,{expires: new Date(Date.now())});
    res.send("Logout Successfully");
  }
  catch(err){  
    res.send("Error: "+err.message);
  }
}

module.exports = Logout;


