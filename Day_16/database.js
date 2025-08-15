const mongoose = require('mongoose');
const {userSchema,myModels}=require('./Models/users');

async function main(){

    await mongoose.connect("mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/BookStore");  // create database name "BookStore"

// // start writing code start with schema

    // const userSchema=new Schema({
    //     name:String,
    //     age:Number,
    //     city:String,
    //     gender:String
    // })

// // Model ko create === Collection ko create karna

    // const myModels= mongoose.model("user",userSchema);

// // we created document or created object

    // const user1=new myModels({name:"Rahul",age:21,city:"Barh",gender:"Male"});
    // await user1.save();

// // or

    // await myModels.create({name:"shiva",city:"Indore"});

// // or

    // await myModels.insertMany([
    //     {
    //         name:"sita",
    //         age:19,
    //         city:"Janakpuri"
    //     }
    // ])

// // find document
    
    const ans=await myModels.find({});
    console.log(ans);

// // find all document by any particular field

    const result= await myModels.find({name:"sita"});
    console.log(result);

}

// main()
// .then(()=>console.log("connected to DB"))
// .catch((err)=>console.log(err));


module.exports={main};