export default function Suggestions({data, handleSelect}){
    return (
        <ul className="flex flex-col whitespace-nowrap text-sm">
            {data.map(city => 
            <li onClick={() => handleSelect(city)} className="last:border-b-0 p-1 bg-slate-400 border-b-2 cursor-pointer hover:bg-slate-500" key={city.place_id}>
                {city.description}
            </li>)}
        </ul>
    )
}