import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='border-2 p-[25px]'>
        <p>ComponentB</p>
        <ComponentC />
    </div>
  )
}

export default ComponentB