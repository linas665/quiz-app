import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[10lvh] flex justify-center items-center'>
      <div className='w-3/5 flex justify-between'>
      <Link to={"/"} className='text-2xl font-semibold tracking-tighter'>quiz</Link>
        
        <Link to={"/create"}>Create</Link>
      </div>
    </div>
  )
}

export default Navbar
