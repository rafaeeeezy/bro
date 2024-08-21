import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count ${count} ${color}`;
    // }, [count, color]);

    // const addCount = () => {
    //     setCount(c => c + 1);
    // };

    // const subtractCount = () => {
    //     setCount(c => c - 1);
    // };

    // const changeColor = () => {
    //     setColor(c => c === 'green' ? "red" : 'green');
    // };

    // const colorClasses = {
    //     green: 'text-green-500',
    //     red: 'text-red-500',
    // };   

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect (() => {
        window.addEventListener("resize", handleResize)
        console.log("Event Listener Added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed")
        }
    }, []);

    useEffect (() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])



    return (
        <>
            {/* <p className={colorClasses[color]}>Count: {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={subtractCount}>-</button>

            <br />

            <button onClick={changeColor}>Change Color</button> */}

            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    );
};

export default MyComponent;
