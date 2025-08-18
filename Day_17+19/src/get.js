const myModels = require("../Models/users");

const Get=async(req,res)=>{
    try{
        const result=await myModels.find();
        res.send(result);
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Get;