import Home from '../pages/Home.jsx'
import Tasks from '../pages/Tasks.jsx'
import Navbar from '../navigation/Navbar.jsx'
import SideNav from '../navigation/SideNav.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import SidebarContext from '../context/SidebarContext.js'
import { useContext } from 'react'
import { motion } from "motion/react";

export default function HomeLayout() {
  const {sideBarOpen} = useContext(SidebarContext);
   const location = useLocation();
  const hideBar =  location.pathname === '/home/calender' || location.pathname === '/home/settings';
 
  return (
    <div className={`min-h-screen grid  ${
    sideBarOpen
      ? "md:grid-cols-[180px_1fr] lg:grid-cols-[300px_1fr] grid-rows-[55px_1fr]"
      : "grid-cols-1 grid-rows-[55px_1fr]"
  }`}>
    {sideBarOpen &&(<motion.aside
     initial={{ x: -300 }}
  animate={{ x: sideBarOpen ? 0 : -300 }}
  transition={{ duration: 0.6}}
   className="md:row-span-2 z-100 bg-white">
    <SideNav />
    </motion.aside>)}
  
         {!hideBar &&( 
 <motion.header
 initial={{ x: 0 }}
  animate={{ x: sideBarOpen ? 0 : 0 }}
  transition={{ duration: 0.6 }}>
       <Navbar  />
    </motion.header>)} 
  <motion.main 
  initial={{ x: 0 }}
  animate={{ x: sideBarOpen ? 0: 0 }}
  transition={{ duration: 0.6 }}
  className="overflow-y-screen ">
    {/* <Tasks /> */}
     
    {/* <Home /> */}
     <Outlet />
     </motion.main>
    
  
      
    </div>
  )
}
