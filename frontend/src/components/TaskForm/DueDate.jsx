import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineEditCalendar,MdOutlineCalendarMonth } from "react-icons/md";
function DueDate() {
    const {control} = useFormContext();
  return (
    <div className="relative w-full pb-4">
      <label htmlFor="" className="font-medium">Due Date:</label>
      <Controller 
      name="dueDate"
      control={control}
      render={({field}) => (
        <DatePicker 
          selected={field.value}
          onChange={field.onChange}
          placeholderText="Select Due date"
          dateFormat="dd/MM/yyyy"
          className="min-w-full  border-2 border-gray-400 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
                placeholderText="Select a date"
          />
      )}
      />
       <MdOutlineCalendarMonth className="absolute top-[55%] left-2 transform -translate-y-1/2 text-[20px] font-bold text-gray-600" />
              <MdOutlineEditCalendar className="absolute top-[53%] right-2 transform -translate-y-1/2 text-[20px] font-bold text-gray-500" />
    </div>
  )
}

export default DueDate
