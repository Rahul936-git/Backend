const Get = (req,res)=>{
    // res.send(foodMenu);
    res.status(200).send(foodMenu);
}

module.exports=Get;