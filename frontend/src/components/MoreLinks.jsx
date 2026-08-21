import React from 'react'
import { NavLink } from 'react-router-dom'
import {links} from "../constants/navLinks.js"
function MoreLinks() {
    
  return (
    <div>
      <div className='bg-neutral-900 text-white rounded-lg py-1.5 px-4 absolute right-9 top-46 text-center  z-10 block sm:hidden '>
          {links.map((link) => (
              <NavLink
              key={link.path}
              to={link.path}
              className={({isActive}) =>`flex justify-center items-center hover:text-blue-500 dark:hover:text-blue-600 px-2 border-b-2 hover:border-blue-500 dark:hover:border-blue-700 mx-2 py-0.5 ${isActive ? "text-blue-500 dark:text-blue-600 border-blue-500 dark:border-blue-700 border-b-2" : "text-gray-600 dark:text-neutral-200 border-gray-600 dark:border-neutral-200"} `}
            >
              {link.name}
            </NavLink> 
            ))}
      </div>
    </div>
  )
}

export default MoreLinks
