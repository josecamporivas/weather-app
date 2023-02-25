export default function CurrentWeather({weather: currentWeather}){
    const {weather, main} = currentWeather

    const temperatureCelsius = main.temp - 273.15

    return (
    <div className="flex flex-row justify-between text-slate-200 bg-slate-500 w-96 p-4 rounded-md">
        <section>
            <h1 className="text-3xl font-bold">{Math.round(temperatureCelsius)} ºC</h1>
            <h2 className="capitalize text-xl font-bold ">{weather[0].description}</h2>
        </section>
        <img className="p-0" alt={weather[0].description} src={`${process.env.PUBLIC_URL}/weatherIcons/${weather[0].icon}.png`} />
    </div>)
}