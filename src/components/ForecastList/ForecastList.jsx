import ForecastCard from "../ForecastCard/ForecastCard";

export default function ForecastList({forecastArray}){
    return (
        <section className="flex gap-x-1 w-7/12 overflow-hidden overflow-x-auto" >
            {forecastArray.map((forecast) => <ForecastCard key={forecast.dt} forecast={forecast} />)}
        </section>
    )
}