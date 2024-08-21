import React, { useState, useEffect, useRef } from 'react'

const Stopwatch = () => {
    
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false); 
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false); 
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className='flex flex-col items-center border-4 rounded-[50px] bg-white p-[30px]'>
                <div className='text-[5rem] font-bold text-gray-400 drop-shadow-md mb-[25px]'>{formatTime(elapsedTime)}</div>
                <div>
                    <button className='text-[1.5rem] font-bold py-2.5 px-5 rounded-[10px] min-w-125px m-[5px] cursor-pointer text-white transition-colors bg-green-400 hover:bg-green-500' onClick={start}>Start</button>
                    <button className='text-[1.5rem] font-bold py-2.5 px-5 rounded-[10px] min-w-125px m-[5px] cursor-pointer text-white transition bg-red-500 hover:bg-red-600' onClick={stop}>Stop</button>
                    <button className='text-[1.5rem] font-bold py-2.5 px-5 rounded-[10px] min-w-125px m-[5px] cursor-pointer text-white transition-colors bg-blue-400 hover:bg-blue-500' onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch