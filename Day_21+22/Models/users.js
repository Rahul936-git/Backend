const mongoose=require("mongoose");
const {Schema}=mongoose;
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:25,
        unique:true
    },

    lastName:{
        type:String,
        minLength:3,
        maxLength:25
    },

    age:{
        type:Number,
        min:14,
        max:70,
        required:true,
    },

    gender:{
        type:String,
        // enum:["male","female","others"]
        validate(value){              // validator does not By default check during update so mention them specially
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender");
        },
        required:true,
        immutable:true
    },

    emailID:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true
    },

    password:{
        type:String,
        required:true,
    },

    photo:{
        type:String,
        default:"this is anonymous profile url"   //anonymous profile
    }
}, { timestamps: true })

userSchema.methods.getJWT=function(){      // userSchema.methods.functionName=function(){

    // const JWTtoken= jwt.sign({_id:people._id, emailID:people.emailID},"Rahul@66748",{expiresIn:"10d"});       // jwt.sign({payload}),key
    // const JWTtoken= jwt.sign({_id:this._id, emailID:this.emailID},"Rahul@66748",{expiresIn:"1d"});           // here this reflects same object
    const JWTtoken= jwt.sign({_id:this._id, emailID:this.emailID},process.env.SECRET_KEY,{expiresIn:"1d"});
    return JWTtoken;
}

// userSchema.methods.verifyPassword= async function(){
//     // const isAllowed= await bcrypt.compare(req.body.password,people.password);
//     const isAllowed= await bcrypt.compare(req.body.password,this.password);
//     return isAllowed; 
// }

userSchema.methods.verifyPassword= async function(passwordByuser){
    // const isAllowed= await bcrypt.compare(req.body.password,people.password);
    // const isAllowed= await bcrypt.compare(req.body.password,this.password);
    const isAllowed= await bcrypt.compare(passwordByuser,this.password);
    return isAllowed;
}

// static function

const myModels=mongoose.model("user",userSchema);    //this create class

module.exports=myModels;