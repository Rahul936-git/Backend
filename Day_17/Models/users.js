const mongoose=require("mongoose");
const {Schema}=mongoose;

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

const myModels=mongoose.model("user",userSchema);

module.exports=myModels;