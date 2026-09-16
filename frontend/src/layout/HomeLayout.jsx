import Home from '../pages/Home.jsx'
import Tasks from '../pages/Tasks.jsx'
import Navbar from '../navigation/Navbar.jsx'
import SideNav from '../navigation/SideNav.jsx'
import { Outlet} from 'react-router-dom'
import SidebarContext from '../context/SidebarContext.js'
import { useContext } from 'react'
import { motion } from "motion/react";

export default function HomeLayout() {

  const {sideBarOpen} = useContext(SidebarContext);
  //  const location = useLocation();
  // const hideBar =  location.pathname === '/home/calender' || location.pathname === '/home/settings';
 
  return (
   
 <div className={`min-h-screen grid grid-rows-[55px_1fr]  overflow-x-hidden  transition-[grid-template-columns] duration-[1000ms] ease-in-out ${sideBarOpen ? "grid-cols-[100%_0px] sm:grid-cols-[30%_1fr] lg:grid-cols-[25%_1fr] xl:grid-cols-[20%_1fr]": "grid-cols-[0px_100%]"} `}>
  <aside className={`row-span-2 min-w-0  border-2 rounded-md border-gray-200 mx-2 my-2  ` }>
    <SideNav />
  </aside>
<div className='bg-white h-screen'>
 <header className="min-w-0 overflow-hidden bg-white border-2 rounded-md border-gray-200 mx-2 mt-2">
    <Navbar />
  </header>
  <main className="min-w-0 overflow-x-hidden border-2 rounded-md border-gray-200 mx-2  bg-white my-2">
    <Outlet />
  </main>
</div>
 
</div>  
 
  )
}
