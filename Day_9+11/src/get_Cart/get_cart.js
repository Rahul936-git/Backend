const { AddToCart } = require("../data");

const Look_At_My_Cart=(req,res)=>{
try{
    if(AddToCart.length==0)
        res.send("Cart is Empty");
    else
        res.send(AddToCart);
}
catch(err){
    res.send("Some error occured, plese check"+ err);
}
}

module.exports=Look_At_My_Cart;