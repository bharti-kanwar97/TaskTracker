import React from 'react'
import useTaskForm from '../../hooks/useTaskForm'
import { MdClose } from "react-icons/md";
function TaskHeader() {
  const {formState,closeTab} = useTaskForm()
  return (
    <div>
       {/* Close Button */}
          <button
            onClick={closeTab}
            className="absolute top-4 right-4 text-3xl text-gray-500 dark:text-neutral-50 hover:text-black dark:hover:text-neutral-200"
          >
            {/* ✕ */}
            <MdClose />
          </button>

          <h1 className="text-3xl font-semibold mb-5">
            {formState.editId ? "Update Task" : "Add Task"}
           
          </h1>
          <hr />
          <div className="py-5">
            <h2 className="font-semibold text-[20px] text-neutral-900 leading-9">
              Add New Task
            </h2>
            <h3 className="text-[13px] font-medium text-neutral-600">
              Fill in the details below to add a new task.
            </h3>
          </div>
    </div>
  )
}

export default TaskHeader
