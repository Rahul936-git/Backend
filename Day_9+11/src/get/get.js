const { foodMenu } = require("../data");

const Get = (req,res)=>{
try{
    // res.send(foodMenu);
    res.status(200).send(foodMenu);
}
catch(err){
    res.send("Some error occured, plese check"+ err);
}
}

module.exports=Get;