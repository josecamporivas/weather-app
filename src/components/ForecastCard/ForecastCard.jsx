const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function ForecastCard({forecast}){

    const DATE = new Date(forecast.dt * 1000)
    const {weather, main:{temp}} = forecast

    const temperatureCelsius = Math.round(temp - 273.15)

    return (
        <div className="grid place-content-center place-items-center text-white bg-slate-600 rounded whitespace-nowrap px-2 py-2 mb-1">
            <h3>{DAYS_OF_THE_WEEK[DATE.getDay()]}</h3>
            <h4>{DATE.getHours()}:00</h4>
            <div className="w-20 h-20">
                <img className="p-0 object-cover" alt={weather[0].description} src={`${process.env.PUBLIC_URL}/weatherIcons/${weather[0].icon}.png`} />
            </div>
            <h5>{temperatureCelsius}ºC</h5>
            <p className="capitalize text-md">{weather[0].description}</p>
        </div>
    )
}