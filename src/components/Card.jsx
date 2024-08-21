import React from 'react'
import profilePic from '../assets/rcspicture.jpg'

const Card = (props) => {
  return (
    <div className='border border-solid rounded-xl shadow-lg p-[20px] m-[10px] text-center max-w-[250px] inline-block'>
        <div className='flex justify-center'>
            <img className='max-w-[60%] h-auto rounded-[50%] mb-[10px]' src={profilePic} alt='profile picture'></img>
        </div>
        <p className='m-0 text-lg font-semibold'>{props.name}</p>
        <p className='text-sm'>{props.role}</p>
    </div>
  )
}

export default Card