import React, { useState } from 'react'

const Foods = () => {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        setFoods(f => [...f, newFood]);
        document.getElementById("foodInput").value = "";
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div className='m-10'>
            <p className='text-2xl font-bold mb-3'>List of Food</p>
            <ul className='list-disc list-inside mb-3'>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type='text' id='foodInput' placeholder='Enter food' className='p-1 text-gray-900 border border-black rounded-lg mt-2 mr-3' />
            <button onClick={handleAddFood} className='bg-cyan-400 text-white p-1 rounded-xl w-24'>Add Food</button>
        </div>
    )
}

export default Foods