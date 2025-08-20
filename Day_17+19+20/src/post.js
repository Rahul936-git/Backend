const myModels = require("../Models/users");
const ValidateUser = require("./validateUser");
const bcrypt=require("bcrypt");

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

        // ValidateUser();
        await ValidateUser(req.body);
        req.body.password= await bcrypt.hash(req.body.password,10);  // converting password into hashing

        await myModels.create(req.body);

        // res.send("User Register Successfully");
        // res.status(201).send("User Register Successfully");             // Return error with proper HTTP status codes (instead of always 200 OK):
        res.status(201).json({ message: "User Register Successfully" });   // Send JSON instead of plain text (better for APIs):

    }
    catch(err){

        // res.send("Error: "+err.message);
        // res.status(400).send("Error: "+err.message);
        res.status(400).json({ error: err.message });

    }
}

module.exports=Post;