import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='text-center'>
            <p className='my-[50px] text-[10em]'>{count}</p>
            <button className='p-2 w-[150px] h-[50px] text-[1.5em] font-bold text-white cursor-pointer bg-cyan-400 rounded-2xl mr-2 hover:bg-cyan-500' onClick={decrement}>-</button>
            <button className='p-2 w-[150px] h-[50px] text-[1.5em] font-bold text-white cursor-pointer bg-cyan-400 rounded-2xl mr-2 hover:bg-cyan-500' onClick={reset}>Reset</button>
            <button className='p-2 w-[150px] h-[50px] text-[1.5em] font-bold text-white cursor-pointer bg-cyan-400 rounded-2xl mr-2 hover:bg-cyan-500' onClick={increment}>+</button>
        </div>
    )
}

export default Counter