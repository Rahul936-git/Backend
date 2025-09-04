// import dotenv from "dotenv";
// dotenv.config();

// import { GoogleGenAI } from "@google/genai";     // This imports the necessary class from the Google GenAI SDK.

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });                  // here GoogleGenAI is an object we formed object with new keyword and ai is class
// // creating an instance of the GoogleGenAI class, passing your API key from your environment variables. This ai object will be your main interface for interacting with Google's AI models.

// async function main() {             // This is a common pattern for asynchronous operations in JavaScript, ensuring that await can be used.
// const response = await ai.models.generateContent({      // here models is a key    // here generateContent is a function expecting and object inside it
// // ai.models: Yes, models is an object (or more accurately, a property of the ai instance) that gives you access to the various AI models.
//     model: "gemini-2.5-flash",
//     contents: "Hlo,how are you?"
//   });
//   console.log(response.text);          // display the response by response.text  //  This will print the actual text content of the AI's response to your console.
// }

// main();




// ////////////////////////////////////////Here's how you can modify your main function to achieve a basic multi-turn chat experience in the console:////////////////////////////////////////////////////////




// import dotenv from "dotenv";
// dotenv.config();

// import { GoogleGenAI } from "@google/genai";    

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });                

// async function main() {          
// const response = await ai.models.generateContent({     
//     model: "gemini-2.5-flash",
//     contents: [
//   // Turn 1: user's first message
//   {
//     role: "user",
//     parts: [
//       { text: "Hi Gemini, how are you ?" }
//     ]
//   },
//   // Turn 2: AI's response
//   {
//     role: "model",
//     parts: [
//       { text: "I'm doing great, thanks for asking! How can I help you today?" }
//     ]
//   },
//   // Turn 3: user asks about AI
//   {
//     role: "user",
//     parts: [
//       { text: "Can you tell me something interesting about artificial intelligence?" }
//     ]
//   },
//   // Turn 4: model answers about AI
//   {
//     role: "model",
//     parts: [
//       { text: "Sure! One interesting fact is that modern AI models learn from massive datasets, allowing them to recognize patterns in text, images, or even speech that humans might miss." }
//     ]
//   },
//   // Turn 5: user follows up
//   {
//     role: "user",
//     parts: [
//       { text: "That’s cool! Can AI think like humans?" }
//     ]
//   },
//   // Turn 6: model responds
//   {
//     role: "model",
//     parts: [
//       { text: "AI doesn’t truly think like humans. It analyzes data and predicts outcomes based on patterns, but it doesn’t have consciousness or emotions. However, it can mimic reasoning in specific tasks very effectively." }
//     ]
//   },
//   // Turn 7: user asks for more AI facts
//   {
//     role: "user",
//     parts: [
//       { text: "I want more interesting facts about AI." }
//     ]
//   }
// ],


//   });
//   console.log(response.text);          
// }

// main();



// ////////////////////////////////////////Here's how you can modify pass argument in main function to connect it with index page and postman:////////////////////////////////////////////////////////



import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";    

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });                

async function main(msg) {          
const response = await ai.models.generateContent({     
    model: "gemini-2.5-flash",
    contents:msg
  });
  return response.text;      
}

export default main;