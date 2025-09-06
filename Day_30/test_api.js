async function testWeatherAPI() {
    const apiKey = "6590df4d71ce4b65903223412250409";
    const city = "Delhi";
    
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();
        
        console.log("API Response:", data);
        
        if (data.error) {
            console.log("❌ API Key Error:", data.error.message);
            console.log("Error Code:", data.error.code);
        } else {
            console.log("✅ API Key is valid!");
            console.log("Weather in", data.location.name, ":", data.current.temp_c, "°C");
        }
    } catch (error) {
        console.log("❌ Network/API Error:", error.message);
    }
}

testWeatherAPI();