import React from 'react'
import SidebarContext from '../context/SidebarContext.js'
import {useContext} from "react"
function TaskHeader({ showCompletedDate =false}) {
  const {sideBarOpen} = useContext(SidebarContext);
  return (
    <div>
      <div className={` grid grid-cols-2 text-center bg-neutral-800 dark:bg-[#0B1223] dark:text-white text-gray-200 font-semibold  py-3 px-7 rounded-t-[10px] ${sideBarOpen && showCompletedDate ? "sm:grid-cols-3  lg:grid-cols-5" :   sideBarOpen ? "sm:grid-cols-3 lg:grid-cols-4" : showCompletedDate ?  "sm:grid-cols-5 ": "sm:grid-cols-4" }`}>
                <div className="text-[16px] text-center">Task Name</div>
               
                <div className={`text-[16px] hidden ${showCompletedDate && sideBarOpen ? "sm:hidden" :"sm:grid"} lg:grid`}>Due Date</div>
                 {showCompletedDate && (<div className="text-[16px] hidden sm:grid">Complete Date</div>)}
                <div className={`text-[16px] ${sideBarOpen ? "hidden lg:grid" : "hidden sm:grid"}`}>Category</div>
                <div className="text-center text-[16px] hidden sm:grid">Actions</div>
                <div className="grid sm:hidden"></div>

              </div>
    </div>
  )
}

export default TaskHeader
