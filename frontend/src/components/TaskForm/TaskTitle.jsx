import {useFormContext} from 'react-hook-form'
import { MdOutlineAddTask } from "react-icons/md";
function TaskTitle() {
    const {register} = useFormContext();
    return (
       
        <div className="relative w-full pb-4">
            <label htmlFor="taskName" className="text-[16px] font-semibold py-1" >Task Title:</label>
            <div>
        <input 
        type="text"
         id="taskName"
          {...register("taskName")} 
          placeholder="Enter Your Task" 
          className="min-w-full  border-2 border-gray-400 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600" />
           <MdOutlineAddTask className="absolute top-[55%] left-2 transform -translate-y-1/2 text-[20px] font-bold text-gray-600" />

            </div>
        </div>
      
    )
}
export default TaskTitle;