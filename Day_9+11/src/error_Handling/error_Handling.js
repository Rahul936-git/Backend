// const Error_Handling=(req,res)=>{

//     try{
//         JSON.parse("invalid json");  // throw Error  // Invalid json 
//         res.send("Hello coder");
//     }
//     catch(err){
//         res.send("Some error occured, plese check");
//     }
// }

// module.exports = Error_Handling;


/////////////////////////////////////////// valid json  /////////////////////////////////////////////////


// const Error_Handling=(req,res)=>{

//     try{
//         JSON.parse("invalid json");  // throw Error  // Invalid json
//         // JSON.parse('{"name":"Rahul"}');                  // valid json  
//         res.send("Hello coder");
//     }
//     catch(err){
//         res.send("Some error occured, plese check");
//     }
// }

// module.exports = Error_Handling;



///////////////////////////// Error formate ///////////////////////////////////////////////


const Error_Handling=(req,res)=>{

    try{
        JSON.parse("invalid json");
        throw new Error('BROKEN');    // Error are thrown in this formate
        res.send("Hello coder");
    }
    catch(err){
        res.send("Some error occured, plese check"+ err);
    }
}

module.exports = Error_Handling;