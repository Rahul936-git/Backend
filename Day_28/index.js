// import main from "./aiChat.js";

// import express from "express";
// const app = express();

// app.use(express.json());


// app.post('/chat',async(req,res)=>{
   
//   const {msg}=req.body;

//   const answer = await main(msg);
//   res.send(answer);
// })


// app.listen(4500,()=>{
//   console.log("Listening at port 4500");
// })




// // ///////////////////////////////// store user History /////////////////////////////////////////


import main from "./aiChat.js";

import express from "express";
const app = express();

app.use(express.json());

const chatHistory = {};   // user chat History  in key:value  where key is id and value is content arr

                          // const chattingHistory = {
                          //     1: [{role:'user', parts: [{text:"Hi, How are you"}]}, {role:'model', parts:[{text:"I am Good what about you "}]}],
                          //     2: [],
                          //     3:[],
                          //     4:[],
                          // }
                          // We will install our user chat history here
                          // key: value pair
                          // key = id
                          // value = array

app.post('/chat',async(req,res)=>{
   
  const {id,msg}=req.body;

  if(!chatHistory[id]){
    chatHistory[id]=[];
  }

  const History = chatHistory[id];   // extarct user History
  //  [] array of history


  // History + current :array
  const prompMessage = [...History,{
    role:'user',
    parts:[{text:msg}]
  }]

  const answer = await main(prompMessage);

  History.push({role:'user',parts:[{text:msg}]})
  History.push({role:'model',parts:[{text:answer}]})

  res.send(answer);
})


app.listen(4500,()=>{
  console.log("Listening at port 4500");
})



/////////////////////////////////// use database (MongoDB) /////////////////////////////////////////


// import dotenv from "dotenv";
// dotenv.config();

// import database from "./db.js";

// import Message from "./messageModel.js";
// import main from "./aiChat.js";

// import express from "express";
// database(); // connect to MongoDB

// const app = express();
// app.use(express.json());

// app.post("/chat", async (req, res) => {
//   const { id, msg } = req.body;

//   // 1. fetch chat history from DB
//   const historyDocs = await Message.find({ userId: id }).sort({ createdAt: 1 });
//   const History = historyDocs.map(doc => ({
//     role: doc.role,
//     parts: [{ text: doc.text }]
//   }));

//   // 2. append new user msg
//   const prompMessage = [...History, { role: "user", parts: [{ text: msg }] }];

//   // 3. get AI reply
//   const answer = await main(prompMessage);

//   // 4. save both user + AI messages in DB
//   await Message.create({ userId: id, role: "user", text: msg });
//   await Message.create({ userId: id, role: "model", text: answer });

//   // 5. send reply
//   res.send(answer);
// });

// app.listen(4500, () => {
//   console.log("Listening at port 4500");
// });