const Delete = (req,res)=>{

        const id=parseInt(req.params.id);

        const index = foodMenu.findIndex(item=>item.id===id);

        if(index===-1){
            res.send("Item Does't Exists");
        }
        else{
            foodMenu.splice(index,1);
            res.send("succesfully Deleted");
        }
}

module.exports=Delete;