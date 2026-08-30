import React from 'react'

function TaskHeader({ showCompletedDate =false}) {
  return (
    <div>
      <div className=" grid grid-cols-2 sm:grid-cols-4 text-center bg-neutral-800 dark:bg-[#0B1223] dark:text-white text-gray-200 font-semibold  py-3 px-7 rounded-t-[10px]">
                <div className="text-[16px] text-left">Task Name</div>
               
                <div className="text-[16px] hidden sm:grid">Due Date</div>
                <div className="text-[16px] hidden sm:grid">Category</div>
                 {showCompletedDate && (<div className="text-[16px] hidden sm:grid">Complete Date</div>)}
                <div className="text-center text-[16px] hidden sm:grid">Actions</div>
                <div className="grid sm:hidden"></div>

              </div>
    </div>
  )
}

export default TaskHeader
