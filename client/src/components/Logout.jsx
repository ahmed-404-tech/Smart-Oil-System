import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
    <button onClick={handleLogOut} className='cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center drop-shadow-xl' title='Logout'>
        <img src="/icons/logout.png" alt="" />
    </button>
  )
}

export default Logout
