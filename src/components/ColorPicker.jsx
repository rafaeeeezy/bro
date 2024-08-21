import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    
    return (
        <div className='flex flex-col items-center'>
            <p className='m-[50px] text-4xl font-bold'>Color Picker</p>
            <div className='w-[300px] h-[300px] flex justify-center items-center border-2 rounded-3xl mb-[25px] transition' style={{backgroundColor: color}}>
                <p className='text-[#333333] text-3xl text-center'>Selected Color: {color}</p>
            </div>
            <label className='text-2xl font-bold mb-[10px]'>Select a Color:</label>
            <input className='w-[75px] h-[50px] p-[5px] rounded-lg border-none' type='color' value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker