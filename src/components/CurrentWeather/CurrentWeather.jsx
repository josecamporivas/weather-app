import AdditionalData from "../AdditionalData/AdditionalData"

export default function CurrentWeather({weather: currentWeather}){
    const {weather, main, wind, sys} = currentWeather
    const {humidity} = main
    console.log(currentWeather)

    const temperatureCelsius = Math.round(main.temp - 273.15)
    const feelsLikeCelsius = Math.round(main.feels_like - 273.15)

    return (
    <div className="flex flex-col text-slate-200 bg-slate-500 w-7/12 p-4 rounded-md">
        <div className="flex flex-row justify-between">
            <section>
                <h1 className="text-3xl font-bold">{temperatureCelsius} ºC</h1>
                <h2 className="capitalize text-xl font-bold ">{weather[0].description}</h2>
            </section>
            <img className="p-0" alt={weather[0].description} src={`${process.env.PUBLIC_URL}/weatherIcons/${weather[0].icon}.png`} />
        </div>
        <AdditionalData humidity={humidity} wind={wind} sys={sys} feelsLikeCelsius={feelsLikeCelsius} />
    </div>)
}