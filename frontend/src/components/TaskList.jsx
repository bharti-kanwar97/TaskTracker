import Complete from "../TaskStatus/Complete";
import TaskItem from "./TaskItem";
import { Fragment } from "react";
import usePagination from "../hooks/usePagination";
import ReactPaginate from "react-paginate";
import {TaskContext}  from "../context/TaskContext";
import {useContext} from 'react';
export default function TaskList() {
  const {taskList} = useContext(TaskContext)
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
            <div className="group text-slate-800 dark:text-white bg-gray-100 dark:bg-[#131e3b] border-2 border-gray-200 dark:border-gray-600 rounded-[10px] ">
              <div className=" grid grid-cols-2 sm:grid-cols-4 text-center bg-neutral-800 dark:bg-[#0B1223] dark:text-white text-gray-200 font-semibold  py-3 px-7 rounded-t-[10px]">
                <div className="text-[16px]">Task Name</div>
               
                <div className="text-[16px] hidden sm:grid">Due Date</div>
                <div className="text-[16px] hidden sm:grid">Category</div>
                <div className="text-center text-[16px] hidden sm:grid">Actions</div>
                <div className="grid sm:hidden"></div>

              </div>

              {currentTasks.map((task) => {
               
                return (
                  <>
                    <div
                      key={task._id}
                      className="border-b-1 border-neutral-500 py-1.5 "
                    >
                      <TaskItem
                        task={task}
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
