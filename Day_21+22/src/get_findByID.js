const myModels = require("../Models/users");

const Get_findByID= async(req,res)=>{
    
    try{
        const findByID=await myModels.findById(req.params.id);
        res.send(findByID);
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Get_findByID;