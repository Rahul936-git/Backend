// const myModels = require("../Models/users");
// const jwt = require("jsonwebtoken");

// const Get_Without_ID= async(req,res)=>{

//     try{
//         const verify_payload= jwt.verify(req.cookies.token,"Rahul@66748");      // first verify the user by verifying cookies
//         console.log(verify_payload);
//         const findWithoutId=await myModels.findById(verify_payload._id);
//         res.send(findWithoutId);
//     }
//     catch(err){
//         res.send("Error: "+err.message);
//     }
// }

// module.exports=Get_Without_ID;




// ///////////////////////////////// Day_21 //////////////////////////////////////////



const myModels = require("../Models/users");
const jwt = require("jsonwebtoken");

const Get_Without_ID= async(req,res)=>{

    try{
        // const {token}=req.cookies;

        // if(!token){
        //     throw new Error("Token Doesn't exists");
        // }

        // const verify_payload= jwt.verify(token,"Rahul@66748");      // first verify the user by verifying cookies
        // // console.log(verify_payload);

        // const {_id}=verify_payload;
        // if(!_id){
        //     throw new Error("Id is missing"); 
        // }

        // const findWithoutId=await myModels.findById(_id); 

        // if(!findWithoutId){                // undefined
        //     throw new Error("user Doesn't exists");
        // }

        // res.send(findWithoutId);
        res.send(req.findWithoutId);
    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Get_Without_ID;