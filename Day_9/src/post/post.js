const Post = (req,res)=>{

        foodMenu.push(req.body);
        res.status(201).send("Item added successfully");
}

module.exports=Post;