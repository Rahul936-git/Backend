// const myModels = require("../Models/users");

// const Delete=async(req,res)=>{
//     try{
//         await myModels.findByIdAndDelete(req.params.id);
//         res.send("Delete Successfully");
//     }
//     catch(err){
//         res.send("Error: "+err.message);
//     }
// }

// module.exports=Delete;



// ////////////////////////////////// Day_21 ///////////////////////////////////////////////




const myModels = require("../Models/users");

const Delete=async(req,res)=>{
    try{
        await myModels.findByIdAndDelete(req.params.id);
        res.send("Delete Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Delete;