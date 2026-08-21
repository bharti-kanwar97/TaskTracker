import ReactPaginate from "react-paginate";
import usePagination from "../hooks/usePagination";
import useDeleteTask from '../hooks/useDeleteTask';
import useTaskAction from '../hooks/useTaskAction';

function Complete() {

const {completedTask} = useTaskAction()
  const {currentTasks,handlePageClick,pageCount} = usePagination(completedTask)
  
  const {handleDelete} = useDeleteTask()
  return (
  

        <div className=" flex justify-center items-center ">
      <div className="w-[98%] mx-auto px-8 py-2 relative min-h-[537.6px]">
         {!currentTasks.length ? (
            <p className="text-center py-5 text-2xl text-black dark:text-neutral-200">
              No tasks are found
            </p>
          ) : 
        (<div className=" text-slate-800 dark:text-white bg-gray-100 dark:bg-[#131e3b] border-2 border-gray-200 dark:border-gray-600 rounded-[10px] ">
        <div className=" grid grid-cols-5 text-center bg-neutral-800 dark:bg-[#0B1223] dark:text-white text-gray-200 font-semibold py-3 px-7 rounded-t-[10px]">
                <div className="text-[16px]">Task Name</div>
                <div className="text-[16px]">Due Date</div>
                 <div className="text-[16px]">Complete Date</div>
                <div className="text-[16px]">Status</div>
                <div className="text-center text-[16px]">Actions</div>
              </div>
        <div className="pt-2 text-slate-800 card px-4">
     {currentTasks.map((task) => (
      <div
        key={task._id}
        className=" grid grid-cols-5 text-center border-b-1 border-neutral-500 px-3 py-2 text-black bg-gray-100 dark:bg-[#131e3b]"
      >
        <span className="w-full py-2 text-[15px] font-medium dark:text-white line-through">{task.taskName}</span>
         <div className="flex items-center justify-center text-[15px] font-medium dark:text-white">
        {new Date(task.dueDate)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/-/g, " ")}
      </div>
       <div className="flex items-center justify-center text-[15px] font-medium dark:text-white">
        {new Date(task.updatedAt)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/-/g, " ")}
      </div>
         <div className="flex items-center justify-center text-[15px] font-medium dark:text-white">{task.category}</div>
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
  <ReactPaginate
    breakLabel="..."
    nextLabel="Next >"
    previousLabel="< Prev"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    pageCount={pageCount}
    renderOnZeroPageCount={null}

    containerClassName="flex gap-2 items-center"

    pageClassName="border rounded"

    pageLinkClassName="px-4 py-2 block"

    activeClassName="bg-[#1A4560] text-white rounded"

    previousClassName="border rounded"

    previousLinkClassName="px-4 py-2 block"

    nextClassName="border rounded"

    nextLinkClassName="px-4 py-2 block"

    breakClassName="px-3 py-2"

    disabledClassName="opacity-50 cursor-not-allowed"
  />
</div>
</div>)}
    </div>
    </div>
  )
}

export default Complete
