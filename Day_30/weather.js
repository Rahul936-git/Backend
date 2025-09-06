async function getWeather(location) {
    
    const weatherInfo = [];
    for(const {city,date} of location){
        
       if(date.toLowerCase()=='today') {
        
        console.log("Hello Data fetching");

            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6590df4d71ce4b65903223412250409&q=${city}&aqi=no`);
            const data = await response.json();
            weatherInfo.push(data);
        }
        else{
            const response = await fetch(`http://api.weatherapi.com/v1/history.json?key=6590df4d71ce4b65903223412250409&q=${city}&dt=${date}`);
            const data = await response.json();
            weatherInfo.push(data);
        }
    }

    return weatherInfo;
}

export default getWeather;