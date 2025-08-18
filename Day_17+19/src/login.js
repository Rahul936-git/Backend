const myModels = require("../Models/users");
const bcrypt=require("bcrypt");

const Login=async(req,res)=>{
    try{
        // validate User
        const people= await myModels.findById(req.body._id);

        if(!(req.body.emailID===people.emailID))
            throw new Error("Invalid credentials");

        const isAllowed= await bcrypt.compare(req.body.password,people.password);

        if(!isAllowed)
            throw new Error("Invalid credentials");

        res.send("Login Successfully");

    }catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=Login;