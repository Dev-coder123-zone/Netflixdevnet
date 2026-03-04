import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (  
    <>
     <div className=" bg-black text-white  px-4 py-3 flex items-center flex-row gap-3 text-sm font-bold w-75 border-t-4 max-[290]:w-70 max-[290]:text-xs">
       <Link to={'/'} className='hover:bg-blue-700 hover:h-6  hover:scale-110 transition '>Home</Link>
       <Link to={'/bollywood'} className='hover:bg-blue-700 hover:h-6 hover:scale-110 transition '>Bollywood</Link>
       <Link to={'/about'} className='hover:bg-blue-700 hover:h-6 hover:scale-110 transition'>About</Link>
       <Link to={'/marvel'} className='hover:bg-blue-700 hover:h-6 hover:scale-110 transition'>Marvel </Link>
       <Link to={'/login'} className='hover:bg-blue-700 hover:h-6 hover:scale-110 transition'>login</Link>
     </div>
    
    
    </>
  )
}

export default Header2
