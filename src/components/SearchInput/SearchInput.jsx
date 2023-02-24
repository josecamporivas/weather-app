import { useState } from "react"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import Suggestions from "../Suggestions/Suggestions";

export default function SearchInput({setLocation}){    
    const {ready,value,suggestions: { status, data },setValue,clearSuggestions,} = usePlacesAutocomplete({
        debounce: 200,
    });

    const handleChange = async (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
        console.log(data)
    }

    const handleSubmit = async (e, description) => {
        e.preventDefault()
        await handleSelect({description})
    }

    const handleSelect = async ({description}) => {
        const results = await getGeocode({
            address: description
        })

        const { lat, lng } = getLatLng(results[0]);
        console.log(lat, lng)

        setLocation({lat,lng, description})
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, data[0].description)}>
            <div className="max-w-[216px] overflow-hidden">
                <input disabled={!ready} className='bg-slate-200 border-slate-500 border-2 font-medium px-2 py-1 rounded-md focus:outline-none focus:border-slate-700 placeholder:text-slate-700' placeholder="Search a location..." onChange={handleChange} value={value}/> 
                {
                    data[0] && data[0].description &&
                    <Suggestions data={data} handleSelect={handleSelect} />
                }    
            </div>   
        </form>
    )
}