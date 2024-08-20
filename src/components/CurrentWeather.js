import React, { useEffect, useState } from "react";
import WavesIcon from "@mui/icons-material/Waves";
import AirIcon from "@mui/icons-material/Air";

function CurrentWeather(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const search = async (city) => {
        setLoading(true); // Set loading to true when fetching starts
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found'); // Handle HTTP errors
            const data = await response.json();
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: data.weather[0].icon
            });
            setError(false);
        } catch (error) {
            setWeatherData(null);
            setError(true);
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    }

    useEffect(() => {
        if (props.cityName) {
            search(props.cityName);
        }
    }, [props.cityName]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Not Found</h1>;

    // if (!weatherData) return null; // If no weatherData, do not render anything

    return (
        <div className="currentWeather">
            <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather icon"/>
            <h1 style={{fontSize: "4em"}}>{weatherData.temperature}°C</h1>
            <h2 style={{fontSize: "3em"}}>{weatherData.location}</h2>
            <div className="weatherDetails">
                <div className="column">
                    <WavesIcon sx={{fontSize: "2em"}}/>
                    <div>
                        <h5>{weatherData.humidity}%</h5>
                        <h6>Humidity</h6>
                    </div>
                </div>
                <div className="column">
                    <AirIcon sx={{fontSize: "2em"}}/>
                    <div>
                        <h5>{weatherData.windSpeed} Km/h</h5>
                        <h6>Wind Speed</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
