// const Logout = async (req, res) => {
//   try {
//     res.clearCookie("token");                   // Clear the JWT cookie
//     res.send("Logout Successfully");
//   } catch (err) {
//     res.send("Error: " + err.message);
//   }
// };

// module.exports = Logout;



// /////////////////////////////////////////////////////////////////////////////////////////



// const Logout= async(req,res)=>{
//   try{
//     res.cookie("token","nnhuigyftyftyvvuyvyiguivi");
//     res.send("Logout Successfully");
//   }catch(err){
//     res.send("Error: "+err.message);
// }
// }

// module.exports= Logout;



// ///////////////////////////////////////////////////////////////////////////////////////////


const Logout= async(req,res)=>{
  try{
    res.cookie("token",null,{expires: new Date(Date.now())});
    res.send("Logout Successfully");
  }
  catch(err){
    res.send("Error: "+err.message);
  }
}

module.exports= Logout;