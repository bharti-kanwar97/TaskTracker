import Complete from "../TaskStatus/Complete";
import TaskItem from "./TaskItem";
import TaskHeader from "../components/TaskHeader";
import usePagination from "../hooks/usePagination";
import ReactPaginate from "react-paginate";
import {TaskContext}  from "../context/TaskContext";
import {useContext} from 'react';
export default function TaskList() {
  const {taskList,activeTaskId,setActiveTaskId,} = useContext(TaskContext)
  const {currentTasks,handlePageClick,pageCount} = usePagination(taskList)

  return (
    <>
      <div className=" flex justify-center items-center z-5">
        <div className="w-[98%] mx-auto px-4 sm:px-8 py-2 relative min-h-[537.6px]">
          {!currentTasks.length ? (
            <p className="text-center py-5 text-2xl text-black dark:text-neutral-200">
              No tasks are found
            </p>
          ) : (
            <div className=" text-slate-800 dark:text-white bg-gray-100 dark:bg-[#131e3b] border-2 border-gray-200 dark:border-gray-600 rounded-[10px] ">
              <TaskHeader />

              {currentTasks.map((task) => {
               
                return (
                  <>
                    <div
                      key={task._id}
                      className="border-b-1 border-neutral-500 py-1.5 "
                    >
                      <TaskItem
                        task={task} activeTaskId={activeTaskId} setActiveTaskId={setActiveTaskId}
                      />
                    </div>
                  </>
                );
              })}

              <div className=" py-[22px] static bottom-0  left-120 w-fit mx-auto ">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}
