import readlineSync from "readline-sync";

import main from "./index.js";
import {conversationHistory} from "./index.js";
import getWeather from "./weather.js";

async function chatting(){

const question = readlineSync.question('How I can Help You--> ');
const prompt = `
You are an AI agent, who will respond to me in JSON format only.
Analyse the user query and try to fetch city and date details from it.
Date format should be in (yyyy-month-date) if user ask for future weather.
If user ask for today weather, mark date as 'today'.
To fetch weather details, I already have some function which can fetch the weather details for me,

if you need weather information, use the below format
JSON format should look like below:
{
  "weather_details_needed": true,
  "location": [{"city":"mumbai", "date":"today"},{"city":"delhi", "date":"2025-04-30"}]
}

As an LLM; You don't know currrent date: Mark Today date is 2025-04-25

Once you have the weather report details, respond me in JSON format only.
If I have provided you weather details of delhi and you have enough information about them, make the summary of weather report and return it to me like below.
JSON format should look like below:
{
  "weather_details_needed": false,
  "weather_report":"Bhai Delhi ka mausam toh badiya hai, 18 degree temperatur hai, ghar pe pakode bana lo, maja aayega khaane mein",
}




User asked this question: ${question}

Strictly follow JSON format, respond only in JSON format.


`

    conversationHistory.push({
    role: "user",
    parts: [{ text: prompt }]
})

while(true){

let response = await main();
    conversationHistory.push({role:'model',parts:[{text:response}]})
// console.log(response);
response = response.trim();
response = response.replace(/^```json\s*|```$/g,'').trim();
// console.log(response);
const data = JSON.parse(response);
// console.log(data);


if(data.weather_details_needed==false){
    console.log(data.weather_report);
    break;
}

// console.log(data.location);
const weatherInformation = await getWeather(data.location);
const weatherInfo = JSON.stringify(weatherInformation);
// console.log(weatherInfo);
    conversationHistory.push({role:'user',parts:[{text:`This is the weather report I Have fetched for you, use this weather report to generate user response, earlier you asked me to fetch weather details for model. ${weatherInfo}`}]})

}

}


chatting();
