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
        id:3,
        title:'Bhopal'
    },
    {
        id:4,
        title:'Indore'
    },
    {
        id:5,
        title:'Pune'
    },
    {
        id:6,
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