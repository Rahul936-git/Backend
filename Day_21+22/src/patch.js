const myModels = require("../Models/users");

const Patch= async(req,res)=>{  
    try{
        const{_id, ...update}=req.body;
        // await myModels.findByIdAndUpdate(_id,update);       // A.findByIdAndUpdate(id, update) 
        await myModels.findByIdAndUpdate(_id,update,{"runValidators":true});     // validator does not By default check during update so mention them specially
        res.send("findByIdAndUpdate Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports = Patch;