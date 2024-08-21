import React, { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentD = () => {

    const user = useContext(UserContext)

    return (
        <div className='border-2 p-[25px]'>
            <p>ComponentD</p>
            <p>{`Bye ${user}`}</p>
        </div>
    )
}

export default ComponentD