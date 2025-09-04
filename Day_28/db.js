import mongoose from "mongoose";

async function database(){
    try{
        await mongoose.connect(process.env.DB_CONNECT_KEY);
        console.log("connected to db")
    }
    catch(err){
        console.log("connection failed"+err.message);
    }
}

export default database;