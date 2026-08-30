import React from 'react'
import useDeleteTask from '../hooks/useDeleteTask';
import useTaskForm from '../hooks/useTaskForm';
function MoreOptions({task,setMoreOption}) {
      const {handleDelete} = useDeleteTask()
      const {handleUpdate} = useTaskForm();
  return (
    <div>
      <div className='bg-neutral-900 text-white rounded-lg py-1.5 px-4 absolute right-2 top-14 z-10'>
        <div><button>View</button></div>
        <div><button onClick={() => {handleUpdate(task); console.log("clicked on update button"); setMoreOption(false)}}>Edit</button></div>
        <div><button onClick={() => {handleDelete(task._id); console.log("clicked on delete button")}}>Delete</button></div>
      </div>
    </div>
  )
}

export default MoreOptions
