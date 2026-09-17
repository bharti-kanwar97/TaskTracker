import Home from '../pages/Home.jsx'
import Tasks from '../pages/Tasks.jsx'
import Navbar from '../navigation/Navbar.jsx'
import SideNav from '../navigation/SideNav.jsx'
import { Outlet} from 'react-router-dom'
import SidebarContext from '../context/SidebarContext.js'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.js'
import { useEffect } from 'react'
import { motion } from "motion/react";
import useTaskAction from '../hooks/useTaskAction.js'

export default function HomeLayout() {

  const {sideBarOpen} = useContext(SidebarContext);
  const {fetchTasks} = useTaskAction()
  //  const location = useLocation();
  // const hideBar =  location.pathname === '/home/calender' || location.pathname === '/home/settings';
 useEffect(() => {  fetchTasks();},[])
  return (
   
 <div className={`min-h-screen grid grid-rows-[55px_1fr]  overflow-x-hidden  transition-[grid-template-columns] duration-[1000ms] ease-in-out ${sideBarOpen ? "grid-cols-[100%_0px] sm:grid-cols-[30%_1fr] lg:grid-cols-[25%_1fr] xl:grid-cols-[20%_1fr]": "grid-cols-[0px_100%]"} `}>
  <aside className={`row-span-2 min-w-0  border-2 rounded-md border-gray-200 mx-2 my-2  ` }>
    <SideNav />
  </aside>
<div className='bg-white h-screen  flex flex-col'>
 <header className="min-w-0 overflow-hidden bg-white border-2 rounded-md border-gray-200 mx-2 mt-2 shrink-0">
    <Navbar />
  </header>
  <main className="min-w-0 overflow-x-hidden border-2 rounded-md border-gray-200 mx-2  bg-white my-2 flex-1">
    <Outlet />
  </main>
</div>
 
</div>  
 
  )
}
