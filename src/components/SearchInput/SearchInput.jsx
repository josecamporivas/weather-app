import { useState } from "react"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";

export default function SearchInput(){    
    const {ready,value,suggestions: { status, data },setValue,clearSuggestions,} = usePlacesAutocomplete({
        debounce: 200,
    });

    const handleChange = async (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
        console.log(data)

        if(data[0] && data[0].description){
            const results = await getGeocode({
                address: data[0].description
            })
    
            const { lat, lng } = getLatLng(results[0]);
            console.log(lat, lng)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(value)

        //API KEY STILL NOT ACTIVE
        /* const data = await fetch(URL_EXAMPLE).then(data => data.json())
        console.log(data) */
    }

    return (
        <form onSubmit={handleSubmit}>
            <input disabled={!ready} className='bg-slate-200 font-semibold p-1 rounded placeholder:text-slate-700' placeholder="Search a location..." onChange={handleChange} value={value}/>        
        </form>
    )
}