const { AddToCart} = require("../data");

const Delete_Cart=(req,res)=>{
    
try{
    const id= parseInt(req.params.id);

    const idx= AddToCart.findIndex(item=>item.id===id);

    if(idx!=-1){
        AddToCart.splice(idx,1);
        res.send("Delete from AddToCart succesfull");
    }
    else{
        res.send("Item not exist in cart");
    }
}
catch(err){
        res.send("Some error occured, plese check"+ err);
    }
}

module.exports=Delete_Cart;