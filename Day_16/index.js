const express = require("express");

const {main}=require('./database');
const {myModels}=require('./Models/users');

const app=express();

app.use(express.json());

                                             // // CRUD: create Read Update Delete


app.get("/info",async(req,res)=>{
    // res.send("Day_16 information recieved");

    const ans=await myModels.find({});
    res.send(ans);
})

app.post("/info",async(req,res)=>{
    // const ans =new myModels(req.body);
    // await ans.save();

    // res.send("successfully updated");

// // 2nd method

    // await myModels.create(req.body);
    // res.send("Day_16 information recieved");

// // write above code in try catch form
    
    try{
        await myModels.create(req.body);
        res.send("Day_16 information recieved");
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.delete("/info",async(req,res)=>{

    // await myModels.deleteOne({name:"yhnmju"});
    // res.send(" one Deleted successfully");

// // deleteMany
    
    await myModels.deleteMany({name:"rfvbgt"});
    res.send("Many Deleted successfully");
    
})

app.put("/info",async(req,res)=>{

    // await myModels.updateOne({name:"Rahul kumar",age:22});
    // res.send("one updated successfully");

    // await myModels.updateMany({ name: "iuytrewq iuytrewq" }, { $set: { age: 31 } } );      // ({filter} ,{update}) 
    // res.send("Many update successfully, and here age is updated in all/many value");

    await myModels.updateMany({ name: "iuytrewq" }, { name: "iuytrewq iuytrewq" ,age: 61 } );
    res.send("Many updated successfully, and here both name and age is updated in all/many value");
})


main()
// .then(async()=>{
.then(()=>{
    console.log("connected to DB")
    app.listen(4000,()=>{
        console.log("Listening at port 4000");
    })

    // const result= await myModels.find({name:"sita"});
    // console.log(result);
})
.catch((err)=>console.log(err));





// app.listen(4000,()=>{
//     console.log("Listening at port 4000");
// })