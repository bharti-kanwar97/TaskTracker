import { useContext, useState } from "react";
import usePagination from "../hooks/usePagination";
import ReactPaginate from "react-paginate";
import useDeleteTask from "../hooks/useDeleteTask";
import useTaskAction from "../hooks/useTaskAction";
import TaskHeader from "../components/TaskHeader";
import SidebarContext from "../context/SidebarContext.js";
import MoreOptions from "../components/MoreOptions";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Pagination from "../components/Pagination";
function Pending() {
  const { pendingTask } = useTaskAction();
  const { currentTasks,handlePageClick,pageCount,currentPage} = usePagination(pendingTask);
  const { sideBarOpen } = useContext(SidebarContext);
  const { handleDelete } = useDeleteTask();
  const [activeTaskId, setActiveTaskId] = useState(null);
  // const [moreOption, setMoreOption] = useState(false);
const [moreOptionTaskId, setMoreOptionTaskId] = useState(null);
  const handleTaskClick = (taskId) => {
    setActiveTaskId(taskId);
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="w-[98%] mx-auto px-4 sm:px-8 py-2 relative min-h-[537.6px]">
        {!currentTasks.length ? (
          <p className="text-center py-5 text-2xl text-black dark:text-neutral-200">
            No tasks are found
          </p>
        ) : (
          <div className=" text-slate-800 dark:text-white bg-gray-100 dark:bg-[#131e3b] border-2 border-gray-200 dark:border-gray-600 rounded-[10px] ">
            <TaskHeader />
            <div className="pt-2 text-slate-800 sm:px-4">
              {currentTasks.map((task) => {
                const isActive = activeTaskId === task._id;

                return (
                  <div
                    key={task._id}
                    onClick={() => handleTaskClick(task._id)}
                    className={activeTaskId === task._id ? "active-row" : ""}
                  >
                    <div
                      className={`grid grid-cols-2 lg:grid-cols-4 ${sideBarOpen ? "sm:grid-cols-3" : "sm:grid-cols-4"} text-center bg-gray-100 dark:bg-[#131e3b] font-semibold p-3 border-b-1 border-neutral-500`}
                    >
                      <span className="w-full py-2 text-[15px] font-medium dark:text-white text-center">
                        {task.taskName}
                      </span>
                      <div className="hidden sm:flex items-center justify-center text-[15px] font-medium dark:text-white">
                        {new Date(task.dueDate)
                          .toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          .replace(/-/g, " ")}
                      </div>
                      <div
                        className={`text-[16px] ${sideBarOpen ? "sm:hidden lg:grid" : "hidden sm:grid"}`}
                      >
                        {task.category}
                      </div>
                      <div
                        className={`w-auto px-2 gap-2 items-center justify-center ${sideBarOpen ? " hidden lg:flex" : "hidden sm:flex"}`}
                      >
                        <button className="bg-[#0369A1] text-white hover:bg-[#075985] py-2 px-4 rounded-md font-medium cursor-pointer">
                          View
                        </button>

                        <button
                          onClick={() => handleDelete(task._id)}
                          className="bg-[#B91C1C] text-white hover:bg-[#991B1B] py-2 px-4 rounded-md font-medium cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                      {isActive && (
                        <div
                          className={`relative w-auto px-2 items-center justify-end      ${sideBarOpen
                              ? "flex sm:flex lg:hidden"
                              : "flex sm:hidden"
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                                setMoreOptionTaskId(
    moreOptionTaskId === task._id
      ? null
      : task._id
  );
                              // setMoreOption(!moreOption);
                              console.log("click on more option button");
                            }}
                            className="p-1.5"
                          >
                            <MdOutlineMoreHoriz className="text-2xl " />
                          </button>
                          {moreOptionTaskId === task._id && (
                            <MoreOptions
                              task={task}
                               setMoreOption={() => setMoreOptionTaskId(null)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
       
            <div className="flex justify-center py-6">
             <Pagination  pageCount={pageCount}
  handlePageClick={handlePageClick}
  currentPage={currentPage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pending;
