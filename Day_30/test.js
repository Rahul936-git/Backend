import { GoogleGenAI } from '@google/genai';

async function run() {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyBtArmZy3wYzoBklc1cflKZsbZcPC6MVxw" });

  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: "Hello, just say hi in JSON: {\"hi\":true}" }] }]
    });
    console.log("✅ Gemini replied:");
    console.log(res.text);
  } catch (err) {
    console.error("❌ Gemini error:", err.message);
  }
}

run();
