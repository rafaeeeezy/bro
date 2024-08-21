import React, { useState, useEffect } from 'react';
import bg from '../assets/painting.webp';

const DigitalClock = () => {

    const bgstyle = {
        backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

    return (  
        <div style={bgstyle}>
            <div className='backdrop-blur-[5px] w-full flex justify-center py-0'> 
                <div className='text-white text-[6rem] font-bold'>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;
