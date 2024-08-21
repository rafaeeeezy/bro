import React, { useState } from 'react'

const Car = () => {

    const [car, setCar] = useState({year: 2024, make: "Honda" , model: "Civic"});

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }

    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }

    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

    return (
        <div className='m-2'>
            <form>
                <p className='mb-2'>My favorite car is: {car.year} {car.make} {car.model}</p>

                <input onChange={handleYearChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='number' value={car.year} /> <br />
                <input onChange={handleMakeChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='text' value={car.make} /> <br />
                <input onChange={handleModelChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='text' value={car.model} /> <br />
                
            </form>
        </div>
    )
}

export default Car