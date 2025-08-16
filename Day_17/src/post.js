const myModels = require("../Models/users");

// app.post("/register",async(req,res)=>{
//     try{
//         await myModels.create(req.body);
//         res.send("User Register Successfully");
//     }
//     catch(err){
//         res.send("Error: "+err.message); 
//     }
// })

// 

const Post =async(req,res)=>{
    try{

// validation during api call not during dataBase for cost saving and UI improvament
        const mandatoryField= ["firstName","age","gender","emailID"]
        const IsAllowed=mandatoryField.every((k)=>Object.keys(req.body).includes(k));

        if(!IsAllowed){
            throw new Error("Field missing");
        }

        await myModels.create(req.body);
        res.send("User Register Successfully");
    }
    catch(err){
        res.send("Error: "+err.message); 
    }
}

module.exports=Post;