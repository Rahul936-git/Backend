const myModels = require("../Models/users");
const jwt = require("jsonwebtoken");

const Get_Without_ID= async(req,res)=>{

    try{
        const verify_payload= jwt.verify(req.cookies.token,"Rahul@66748");      // first verify the user by verifying cookies
        console.log(verify_payload);
        const findWithoutId=await myModels.findById(verify_payload._id);
        res.send(findWithoutId);
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Get_Without_ID;