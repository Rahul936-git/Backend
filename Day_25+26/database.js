// const mongoose = require('mongoose');

// async function main(){
//     await mongoose.connect("mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/Instagram")                              // here Instagram is the name of dataBase which is automatically created
// }

// module.exports=main;



// ///////////////////////////////////////////////////// Day_22



// const mongoose = require('mongoose');

// async function main(){
//     // await mongoose.connect("mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/Instagram")                              // here Instagram is the name of dataBase which is automatically created
//     await mongoose.connect(process.env.DB_CONNECT_KEY);
// }

// module.exports=main;



// /////////////////////////////////////////////////////// try and catch formate

const mongoose = require('mongoose');

async function main(){
    try{
    // await mongoose.connect("mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/Instagram")                              // here Instagram is the name of dataBase which is automatically created
        await mongoose.connect(process.env.DB_CONNECT_KEY);
        console.log("connected to db");
    }
    catch(err){
        console.log("connection failed" +err.message);
    }
}

module.exports=main;

