// const express= require('express');
// const app= express();

// app.use(express.json());  // convert js to jsx

// const foodMenu = [
//   { id: 1, food: "Paneer Butter Masala", category: "veg", price: 220 },
//   { id: 2, food: "Chicken Biryani", category: "nonVeg", price: 250 },
//   { id: 3, food: "Masala Dosa", category: "veg", price: 120 },
//   { id: 4, food: "Fish Curry", category: "nonVeg", price: 270 },
//   { id: 5, food: "Veg Pulao", category: "veg", price: 150 },
//   { id: 6, food: "Mutton Rogan Josh", category: "nonVeg", price: 320 },
//   { id: 7, food: "Palak Paneer", category: "veg", price: 200 },
//   { id: 8, food: "Butter Chicken", category: "nonVeg", price: 280 },
//   { id: 9, food: "Chole Bhature", category: "veg", price: 130 },
//   { id: 10, food: "Egg Curry", category: "nonVeg", price: 180 },
//   { id: 11, food: "Aloo Paratha", category: "veg", price: 100 },
//   { id: 12, food: "Chicken Lollipop", category: "nonVeg", price: 220 },
//   { id: 13, food: "Dal Tadka", category: "veg", price: 140 },
//   { id: 14, food: "Prawn Masala", category: "nonVeg", price: 300 },
//   { id: 15, food: "Mixed Veg Curry", category: "veg", price: 160 },
//   { id: 16, food: "Chicken 65", category: "nonVeg", price: 210 },
//   { id: 17, food: "Paneer Tikka", category: "veg", price: 190 },
//   { id: 18, food: "Keema Naan", category: "nonVeg", price: 150 },
//   { id: 19, food: "Vegetable Fried Rice", category: "veg", price: 140 },
//   { id: 20, food: "Fish Fry", category: "nonVeg", price: 250 },
//   { id: 21, food: "Rajma Chawal", category: "veg", price: 130 },
//   { id: 22, food: "Chicken Manchurian", category: "nonVeg", price: 230 },
//   { id: 23, food: "Veg Spring Roll", category: "veg", price: 120 },
//   { id: 24, food: "Mutton Biryani", category: "nonVeg", price: 310 },
//   { id: 25, food: "Hakka Noodles", category: "veg", price: 150 }
// ];

// const AddToCart=[]; // user all fooditems store inside this

// app.get("/food",(req,res)=>{
//     // res.send(foodMenu);
//     res.status(200).send(foodMenu);
// })

// app.post("/admin",(req,res)=>{
//                                              // Add item into food menu
//     const token = "ABCDEF";                  // Authrntication needed to check it is admin or not
//     const Access=token==="ABCDEF"?1:0;       // dummy code

//     if(Access){
//         foodMenu.push(req.body);
//         // res.send("Item Added succesfully");
//         res.status(201).send("Item added successfully");
//     }
//     else{
//         // res.send("Item not Added");
//         res.status(403).send("Item can't be added");
//     }
// })

// app.delete("/admin/:id",(req,res)=>{
//                                               // Add item into food menu
//     const token = "ABCDEF";                  // Authrntication needed to check it is admin or not
//     const Access=token==="ABCDEF"?1:0;       // dummy code

//     if(Access){
//         const id=parseInt(req.params.id);

//         const index = foodMenu.findIndex(item=>item.id===id);

//         if(index===-1){
//             res.send("Item Does't Exists");
//         }
//         else{
//             foodMenu.splice(index,1);
//             res.send("succesfully Deleted");
//         }
//     }
//     else{
//         res.status(403).send("No permission");
//     }
// })

// app.patch("/admin",(req,res)=>{
//                                               // Add item into food menu
//     const token = "ABCDEF";                  // Authrntication needed to check it is admin or not
//     const Access=token==="ABCDEF"?1:0;       // dummy code

//     if(Access){
//         const id=req.body.id;

//         const foodData=foodMenu.find(item=>item.id===id);

//         if(foodData){          // exists
//             if(req.body.food)
//                 foodData.food=req.body.food;
//             if(req.body.category)
//                 foodData.category=req.body.category;
//             if(req.body.price)
//                 foodData.price=req.body.price;

//             res.send("succesfully updated");
//         }
//         else{
//             res.send("Item not exists");
//         }
//     }
//     else{
//         res.send(403).send("No permission");
//     }
// })


// app.listen(1000,()=>{
//     console.log("listening at 1000 port number");
// })





// // //////////////////////// Authrnticating user with the help of middleWare ////////////////




const express= require('express');
const app= express();

app.use(express.json());  // convert js to jsx

const {Auth}=require("./middleware/auth");
const { Patch } = require('./patch/Patch');
const Delete = require('./delete/delete');
const Post = require('./post/post');
const Get = require('./get/get');
const Post_Cart = require('./Post_cart/post_Cart');
const Delete_Cart = require('./delete_Cart/Delete_cart');
const Look_At_My_Cart = require('./get_Cart/get_cart');
const Error_Handling = require('./error_Handling/error_Handling');


app.get("/food",Get)


app.use("/admin",Auth)                 // we can write this in different ways with post, patch ,delete


// app.post("/admin",Auth,(req,res)=>{
app.post("/admin",Post)

// app.delete("/admin/:id",Auth,(req,res)=>{
app.delete("/admin/:id",Delete);

// app.patch("/admin",Auth,(req,res)=>{
app.patch("/admin",Patch);

app.post("/user/:id",Post_Cart);

app.delete("/user/:id",Delete_Cart);

app.get("/user",Look_At_My_Cart);

app.listen(1000,()=>{
    console.log("listening at 1000 port number");
})

app.get("/dummy",Error_Handling);  // Error Handling in middleware

