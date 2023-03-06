import ForecastCard from "../ForecastCard/ForecastCard";

export default function ForecastList({forecastArray}){
    return (
        <section className="flex gap-x-1 w-9/12 h-full overflow-hidden overflow-x-scroll" >
            {forecastArray.map((forecast) => <ForecastCard key={forecast.dt} forecast={forecast} />)}
        </section>
    )
}