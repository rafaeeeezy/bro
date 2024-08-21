import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext();

const ComponentA = () => {

    const [user, setUser] = useState('rafaeeezy');

    return (
        <div className='border-2 p-[25px]'>
            
            <p>ComponentA</p>
            <p>{`Hello ${user}`}</p>

            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
            
        
        </div>
    )
}

export default ComponentA