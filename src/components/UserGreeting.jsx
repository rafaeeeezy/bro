import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = ({ isLoggedIn = false, username = "User" }) => {

    const welcomeMessage = <p className='bg-green-400 text-white p-3 rounded-md'>Welcome {username}</p>
    const loginPrompt = <p className='bg-red-400 text-white p-3 rounded-md'>Please log in to continue</p>

    return (isLoggedIn ? welcomeMessage : loginPrompt )

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting