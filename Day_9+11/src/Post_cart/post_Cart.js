const { AddToCart ,foodMenu } = require("../data");

const Post_Cart=(req,res)=>{
try{
    const id = parseInt(req.params.id);

    const foodItems=foodMenu.find(item=>item.id===id);

    if(foodItems){
        AddToCart.push(foodItems);
        res.status(200).send("AddToCart succesfull");
    }
    else{
        res.send("Item out of stocks");
    }
}
catch(err){
    res.send("Some error occured, plese check"+ err);
}
}

module.exports=Post_Cart;