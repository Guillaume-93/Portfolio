import { useEffect, useState } from "react"
// import loader from "../../assets/loader.svg"
// import browser from "../../assets/browser.svg"
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);

    useEffect(() => {
        fetch(`https://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
            .then(response => {
                if (!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`);
                return response.json();
            })
            .then(responseData => {
                setWeatherData({
                    city: responseData.data.city,
                    country: responseData.data.country,
                    iconId: responseData.data.current.weather.ic,
                    temperature: responseData.data.current.weather.tp,
                });
            })
            .catch(err => {
                setErrorInfo(err.message);
            });
    }, []);

    if (!weatherData || errorInfo) {
        return null;
    }

    return (
        <div className="flex items-center justify-start gap-x-3 text-sm">
            {/* {(!weatherData && !errorInfo) && (
                <img src={loader} alt="loading icon" className="w-5 h-5 animate-spin" />
            )} */}

            {weatherData && (
                <>
                    <img src={`/weather-icons/${weatherData.iconId}.svg`} className="w-10 h-10" alt="weather icon" />
                    <div className="flex gap-x-3">
                        <p className="text-base text-gray-600 font-bold">{weatherData.temperature}°</p>
                        <p className="font-semibold leading-6">{weatherData.city}</p>
                    </div>
                </>
            )}

            {/* {errorInfo && !weatherData && (
                <>
                    <img src={browser} alt="error icon" className="w-5 h-5" />
                    <p className="text-red-500">{errorInfo}</p>
                </>
            )} */}
        </div>
    );
}


export default Weather;
