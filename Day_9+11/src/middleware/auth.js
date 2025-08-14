const Auth =  (req,res,next)=>{

try{                                     // Add item into food menu
    const token = "ABCDEF";                  // Authentication needed to check it is admin or not
    const Access=token==="ABCDEF"?1:0;       // dummy code

    if(!Access){
        res.status(403).send("No permission");
    }
    else{
        next();
    }
}
catch(err){
    res.send("Some error occured, plese check"+ err);
}

}

module.exports={
    Auth,
}
