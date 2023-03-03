const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function ForecastCard({forecast}){

    const DATE = new Date(forecast.dt * 1000)
    const {weather} = forecast

    return (
        <div className="text-white bg-slate-600 rounded whitespace-nowrap h-24">
            <h3>{DAYS_OF_THE_WEEK[DATE.getDay()]}</h3>
            <h4>{DATE.getHours()}:00</h4>
            <p>{weather[0].description}</p>
        </div>
    )
}