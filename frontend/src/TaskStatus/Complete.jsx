import ReactPaginate from "react-paginate";
import usePagination from "../hooks/usePagination";
import useDeleteTask from '../hooks/useDeleteTask';
import useTaskAction from '../hooks/useTaskAction';
import TaskHeader from "../components/TaskHeader";
import { useContext } from "react";
import SidebarContext from "../context/SidebarContext";
import Pagination from "../components/Pagination";
function Complete({ showCompletedDate = true}) {
  const {sideBarOpen} = useContext(SidebarContext)
const {completedTask} = useTaskAction()
  const {currentTasks,handlePageClick,pageCount,currentPage} = usePagination(completedTask)
  
  const {handleDelete} = useDeleteTask()
  return (
  

        <div className=" flex justify-center items-center ">
      <div className="w-[98%] mx-auto  px-4 sm:px-8 py-2 relative min-h-[537.6px]">
         {!currentTasks.length ? (
            <p className="text-center py-5 text-2xl text-black dark:text-neutral-200">
              No tasks are found
            </p>
          ) : 
        (<div className=" text-slate-800 dark:text-white bg-gray-100 dark:bg-[#131e3b] border-2 border-gray-200 dark:border-gray-600 rounded-[10px] ">
               <TaskHeader showCompletedDate />
        <div className="pt-2 text-slate-800 sm:px-4">
     {currentTasks.map((task) => (
      <div
        key={task._id}
        className={`grid grid-cols-2  ${sideBarOpen ? "sm:grid-cols-3" : "sm:grid-cols-5"} lg:grid-cols-5 text-center bg-gray-100 dark:bg-[#131e3b] font-semibold p-3 border-b-1 border-neutral-500`}
      >
        <span className="w-full py-2 text-[15px] font-medium dark:text-white line-through">{task.taskName}</span>
       <div
  className={`hidden ${
    showCompletedDate && sideBarOpen
      ? "sm:hidden"
      : "sm:grid"
  } items-center justify-center text-[15px] font-medium dark:text-white lg:grid`}
>
        {new Date(task.dueDate)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/-/g, " ")}
      </div>
       <div className="hidden sm:flex items-center justify-center text-[15px] font-medium dark:text-white">
        {new Date(task.updatedAt)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/-/g, " ")}
      </div>
         {/* <div className="hidden sm:flex items-center justify-center text-[15px] font-medium dark:text-white">{task.category}</div> */}
         <div className={`text-[15px]  items-center justify-center font-medium dark:text-white hidden  ${sideBarOpen ? "sm:hidden lg:flex" : "sm:flex"}`}>{task.category}</div>
        <div className="w-auto px-2 flex gap-2 items-center justify-center">
         

           <button
        aria-label="Delete a task"
         onClick={() => handleDelete(task._id)} 
         className="bg-[#B91C1C] text-white hover:bg-[#991B1B] py-2 px-4 rounded-md font-medium cursor-pointer">
          Delete
        </button>
        </div>
      </div>
    ))}
    </div>
  
        <div className="flex justify-center py-6">
          <Pagination pageCount={pageCount}
  handlePageClick={handlePageClick}
  currentPage={currentPage} />
  
</div>
</div>)}
    </div>
    </div>
  )
}

export default Complete
