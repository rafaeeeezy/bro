import React, { useContext } from 'react'
import { UserContext } from './ComponentA'
import ComponentD from './ComponentD'

const ComponentC = () => {

    const user = useContext(UserContext);

    return (
        <div className='border-2 p-[25px]'>
            <p>ComponentC</p>
            <p>{`Hello again ${user}`}</p>
            <ComponentD />
        </div>
    )
}

export default ComponentC