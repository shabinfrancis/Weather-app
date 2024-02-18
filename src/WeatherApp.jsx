import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 9.39,
    humidity: 87,
    temp: 10.06,
    tempMax: 10.06,
    tempMin: 10.05,
    weather: "mist"
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}