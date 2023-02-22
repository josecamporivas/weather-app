import { useState } from "react"

export default function SearchInput(){
    const [location, setLocation] = useState('')

    const handleChange = (e) => {
        setLocation(e.target.value)
        console.log(location)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(location)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='bg-slate-200 p-1 rounded placeholder:text-slate-700' placeholder="Search a location..." onChange={handleChange} value={location}/>
        </form>
    )
}