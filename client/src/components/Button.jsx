import React from 'react'

function Button({ label }) {
  return (
    <button className='w-full h-12 rounded-md bg-accent-200 text-white cursor-pointer hover:bg-accent duration-300'>{label}</button>
  )
}

export default Button
