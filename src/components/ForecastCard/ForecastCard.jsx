const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function ForecastCard({forecast}){

    const DATE = new Date(forecast.dt * 1000)
    const {weather} = forecast

    return (
        <li className="text-white bg-slate-600">
            <h3>{DAYS_OF_THE_WEEK[DATE.getDay()]}, {DATE.getHours()}:00</h3>
            <p>{weather[0].description}</p>
        </li>
    )
}