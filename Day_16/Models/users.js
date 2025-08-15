const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema=new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
});

const myModels= mongoose.model("user",userSchema);


module.exports={myModels,userSchema};