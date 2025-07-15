import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='bg-black text-white'>
      <nav className="w-full flex items-center justify-between p-2 ">
        <h3 className="ms-8 text-2xl text-red-500">Router</h3>
        <ul className='list-none flex gap-10 fixed start-[40%] p-2'>
          <li className='cursor-pointer  hover:text-red-500'>
           <NavLink to={'/'} className={(e)=> e.isActive ? "bg-red-600 p-2 px-3 rounded-xl " : ""}>Home </NavLink>
          </li>
          <li className='cursor-pointer hover:text-red-500'>
           <NavLink to={'/about'} className={(e)=> e.isActive ? "bg-red-600 p-2 px-3 rounded-xl " : ""}>About </NavLink>
          </li>
          <li className='cursor-pointer hover:text-red-500'>
            <NavLink to={'/contact'} className={(e)=> e.isActive ? "bg-red-600 p-2 px-3 rounded-xl duration-300" : ""}>Contact </NavLink>
          </li>
        </ul>
        <div>
          <button className='mx-2 bg-red-700 border-none rounded p-1 px-3 cursor-pointer'><NavLink to={'/login'} >Login </NavLink></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar