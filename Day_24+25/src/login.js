// const myModels = require("../Models/users");
// const bcrypt=require("bcrypt");
// const jwt = require("jsonwebtoken");



// const Login=async(req,res)=>{
//     try{
//         // validate User
//         const people= await myModels.findById(req.body._id);

//         if(!(req.body.emailID===people.emailID))
//             throw new Error("Invalid credentials");

//         const isAllowed= await bcrypt.compare(req.body.password,people.password);

//         if(!isAllowed)
//             throw new Error("Invalid credentials");

//                                            // // send JWt token manually

//         // res.cookie("token","huwheieohfiowjfijfuieryhfgetyfdtywfdyfferui");
//         // res.send("Login Successfully");

//                                            // send automatic JWt token
//         const token= jwt.sign({_id:people._id, emailID:people.emailID},"Rahul@66748");     // jwt.sign({payload}),key

//         res.cookie("token",token);
//         res.send("Login Successfully");

//     }catch(err){
//         res.send("Error: "+err.message);
//     }
// }

// module.exports=Login;




// // ////////////////////////////// find user by emailID and password not by id



// const myModels = require("../Models/users");
// const bcrypt=require("bcrypt");
// const jwt = require("jsonwebtoken");



// const Login=async(req,res)=>{
//     try{
// // validate User

//         // const people= await myModels.findById(req.body._id);
//         const people= await myModels.findOne({emailID:req.body.emailID}); // find user by emailID and password not by id


//         // if(!(req.body.emailID===people.emailID))
//         //     throw new Error("Invalid credentials");

//         const isAllowed= await bcrypt.compare(req.body.password,people.password);   // login complete

//         if(!isAllowed)
//             throw new Error("Invalid credentials");

//                                            // // send JWt token manually

//         // res.cookie("token","huwheieohfiowjfijfuieryhfgetyfdtywfdyfferui");
//         // res.send("Login Successfully");

//                                            // send automatic JWt token
//         const token= jwt.sign({_id:people._id, emailID:people.emailID},"Rahul@66748",{expiresIn:"10d"});     // jwt.sign({payload}),key

//         res.cookie("token",token);
//         res.send("Login Successfully");

//     }catch(err){
//         res.send("Error: "+err.message);
//     }
// }

// module.exports=Login;




// ////////////////////////////// Day_22 ///////////////////////////////////////////////////



const myModels = require("../Models/users");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");



const Login=async(req,res)=>{
    try{
// validate User

        // const people= await myModels.findById(req.body._id);
        const people= await myModels.findOne({emailID:req.body.emailID}); // find user by emailID and password not by id


        // if(!(req.body.emailID===people.emailID))
        //     throw new Error("Invalid credentials");

        // const isAllowed= await bcrypt.compare(req.body.password,people.password);   // login complete
        const isAllowed=people.verifyPassword(req.body.password);                      // here "people" is object calling its "verifyPassword" method passing "req.body.password" in it

        if(!isAllowed)
            throw new Error("Invalid credentials");

                                           // // send JWt token manually

        // res.cookie("token","huwheieohfiowjfijfuieryhfgetyfdtywfdyfferui");
        // res.send("Login Successfully");

                                         //  // send automatic JWt token
        // const token= jwt.sign({_id:people._id, emailID:people.emailID},"Rahul@66748",{expiresIn:"10d"});     // jwt.sign({payload}),key // create function of this
        const token= people.getJWT();

        res.cookie("token",token);
        res.send("Login Successfully");

    }catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Login;