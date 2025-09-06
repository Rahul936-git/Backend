import readlineSync from "readline-sync"; 

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBtArmZy3wYzoBklc1cflKZsbZcPC6MVxw"});
export const conversationHistory = []

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: conversationHistory
  });
  
  return response.text;
}


export default main;