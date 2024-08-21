import React from 'react'
import PropTypes from 'prop-types'

const Student = ({ name = "Guest", age = 0, isStudent = false }) => {
  return (
    <div className='p-3 border border-solid'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student
