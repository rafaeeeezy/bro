import React from 'react'

const ProfilePicture = () => {

    const imageUrl = './src/assets/rcspicture.jpg';
    const handleClick = (e) => {
        e.target.style.display = 'none';
        console.log('Poof!');
    }

  return (
    <img onClick={(e) => handleClick(e)} className='w-52 h-52 ml-4 mt-4 cursor-pointer' src={imageUrl} />
  )
}

export default ProfilePicture