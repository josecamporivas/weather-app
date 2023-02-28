import ForecastCard from "../ForecastCard/ForecastCard";

export default function ForecastList({forecastArray}){
    return (
        <ul className="flex flex-row overflow-hidden max-w-4xl" >
            {forecastArray.map((forecast) => <ForecastCard key={forecast.dt} forecast={forecast} />)}
        </ul>
    )
}