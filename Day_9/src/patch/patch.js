const Patch= (req,res)=>{

        const id=req.body.id;

        const foodData=foodMenu.find(item=>item.id===id);

        if(foodData){          // exists
            if(req.body.food)
                foodData.food=req.body.food;
            if(req.body.category)
                foodData.category=req.body.category;
            if(req.body.price)
                foodData.price=req.body.price;

            res.send("succesfully updated");
        }
        else{
            res.send("Item not exists");
        }    
}

module.exports={
    Patch,
}