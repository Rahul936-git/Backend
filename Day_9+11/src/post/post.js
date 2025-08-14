const { foodMenu } = require("../data");

const Post = (req,res)=>{
try{
    foodMenu.push(req.body);
    res.status(201).send("Item added successfully");
}
catch(err){
    res.send("Some error occured, plese check"+ err);
}
}

module.exports=Post;