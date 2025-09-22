import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-10'>
      <h2 className='text-4xl'>This page will be added soon!</h2>
      <Link className='text-lg w-48 h-12 bg-accent-200 flex items-center justify-center rounded-md text-white' to={"/"}>Back to home</Link>
    </div>
  )
}

export default Users
