import React from 'react'
import {useFormContext} from 'react-hook-form'
import {categories} from '../../constants/taskCategories'
import { MdOutlineCategory,MdKeyboardArrowDown  } from "react-icons/md";
function TaskCategory() {
    const {register} = useFormContext();
  return (
    <div className="relative w-full pb-5">
      <label htmlFor="" className="mb-1 font-medium w-full">Select Category</label>
      <select 
      {...register("category")}
      className="min-w-full appearance-none border-2 border-gray-400 rounded-md
               pl-8 pr-10 py-2
               focus:outline-none
               focus:border-blue-500
               focus:ring-2
               focus:ring-blue-500"
      >
        <option value="" className="text-gray-400" disabled>
                  Select Category
                </option>
        {categories.map((category,index) => (
            <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
        ))}
      
      </select>
       <MdKeyboardArrowDown  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-3xl text-gray-500" />
              <MdOutlineCategory className="absolute top-[53%] left-2 transform -translate-y-1/2 text-[20px] font-bold text-gray-500" />
    </div>
   
  )
}

export default TaskCategory
