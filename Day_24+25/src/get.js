const myModels = require("../Models/users");
const jwt = require("jsonwebtoken");

const Get=async(req,res)=>{

    // try{
    //     const result=await myModels.find();
    //     console.log(req.cookies);
    //     res.send(result);
    // }

    try{
        const verify_payload= jwt.verify(req.cookies.token,"Rahul@66748");      // first verify the user by verifying cookies
        console.log(verify_payload);

        const result=await myModels.find();
        console.log(req.cookies);
        res.send(result);
    }

    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Get;