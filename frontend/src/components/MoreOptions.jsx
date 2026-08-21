import React from 'react'
// import useDeleteTask from '../hooks/useDeleteTask';
function MoreOptions() {
    //   const {handleDelete} = useDeleteTask()
  return (
    <div>
      <div className='bg-neutral-900 text-white rounded-lg py-1.5 px-4 absolute right-2 top-14 z-10'>
        <div><button>View</button></div>
        <div><button>Edit</button></div>
        <div><button>Delete</button></div>
      </div>
    </div>
  )
}

export default MoreOptions
