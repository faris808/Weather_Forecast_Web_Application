import React from 'react'

const TopButtons=({ setQuery })=>{
  const cities=[
    {
        id:1,
        title:'Mumbai'
    },
    {
        id:2,
        title:'Delhi'
    },
    {
        id:1,
        title:'Bhopal'
    },
    {
        id:1,
        title:'Indore'
    },
    {
        id:5,
        title:'Pune'
    },
    {
        id:5,
        title:'London'
    },
  ]
  return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city)=>(
            <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({ q: city.title })}>{city.title}</button>
        ))}
    </div>
  )
};
export default TopButtons;