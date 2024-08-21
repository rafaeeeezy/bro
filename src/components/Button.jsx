import React from 'react'

const Button = () => {

    const handleClick = (e) => e.target.textContent = "OUCH";

    // const handleClick = (name) => {
        
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //         else {
    //             console.log(`${name} stop clicking me!`)
    //         }
    // };

    return (
        <button onDoubleClick={(e) => handleClick(e) } className='bg-blue-500 hover:bg-blue-700 active:opacity-75 text-white font-bold py-2 px-4 ml-4 mt-4 rounded'>Click me</button>
    )
}

export default Button