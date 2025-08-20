const mongoose = require('mongoose');

async function main(){
    await mongoose.connect("mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/Instagram") // here Instagram is the name of dataBase which is automatically created
}

module.exports=main;