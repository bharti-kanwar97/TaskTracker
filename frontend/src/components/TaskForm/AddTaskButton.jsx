import React from 'react'

function AddTaskButton() {
  return (
    <div>
      <button
              aria-label="Add or Update a task"
              type="submit"
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] py-2 px-4 rounded-md font-medium cursor-pointer my-4"
            >
                Add Task
              {/* {formState.editId ? "UPDATE TASK" : "ADD TASK"} */}
            </button>
    </div>
  )
}

export default AddTaskButton
