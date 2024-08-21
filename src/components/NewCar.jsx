import React, { useState } from 'react'

const NewCar = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index))
    }

    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    }

    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }

    return (
        <div className='m-4'>

            <p className='mb-2 text-2xl font-bold'>List of Cars</p>

            <ul className='list-disc list-inside mb-3'>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input onChange={handleYearChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='number' value={carYear} /> <br />
            <input onChange={handleMakeChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='text' value={carMake} placeholder='Enter Car Make' /> <br />
            <input onChange={handleModelChange} className='p-2 text-gray-900 border border-black rounded-lg mb-2' type='text' value={carModel} placeholder='Enter Car Model' /> <br />

            <button className='bg-black text-white p-2 rounded-2xl' onClick={handleAddCar}>Add Car</button>
                
        </div>
    )
}

export default NewCar