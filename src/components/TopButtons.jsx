import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title: 'Hyderabad'
        },

        {
            id: 2,
            title: 'Banglore'
        },
        {
            id: 3,
            title: 'Mumbai'
        },
        {
            id: 4,
            title: 'Chennai'
        },
        {
            id: 5,
            title: 'Delhi'
        },
        
        {
            id: 6,
            title: 'Kolkota'
        }
        
    ]

  return (
    <div className="flex items-center justify-evenly  my-6">
        {cities.map((city) => (
            <button key = {city.id} className="text-white text-lg font-medium  transition ease-out hover:scale-125"
            onClick={() => setQuery({ q: city.title })}
            >
                {city.title}
            </button>
        ))}
    </div>
  )
}

export default TopButtons