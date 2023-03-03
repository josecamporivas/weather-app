export default function AdditionalData({humidity, wind, sys, feelsLikeCelsius}){
    const windSpeedKm = Math.round(wind.speed/1000)

    const DATE_SUNRISE = new Date(sys.sunrise * 1000)
    const DATE_SUNSET = new Date(sys.sunset * 1000)

    return (
        <section className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={`${process.env.PUBLIC_URL}/weatherIcons/descarga.png`} alt="Humidity icon"/>
                <label>Feels like: {feelsLikeCelsius}ºC</label>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={`${process.env.PUBLIC_URL}/weatherIcons/humidity.png`} alt="Humidity icon"/>
                <label>Humidity: {humidity}%</label>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={`${process.env.PUBLIC_URL}/weatherIcons/windSpeed.png`} alt="Wind speed icon"/>
                <label>Wind: {windSpeedKm}km/h</label>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={`${process.env.PUBLIC_URL}/weatherIcons/sunrise.png`} alt="Sunrise date icon"/>
                <label>Sunrise: {DATE_SUNRISE.getHours()}:00</label>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={`${process.env.PUBLIC_URL}/weatherIcons/sunset.png`} alt="Sunset date icon"/>
                <label>Sunset: {DATE_SUNSET.getHours()}:00</label>
            </div>
        </section>
    )
}