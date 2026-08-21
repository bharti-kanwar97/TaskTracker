import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import Tasks from "./Tasks";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function HomeDashboard() {
  return (
    <div>
      <div className=" flex justify-between items-center bg-amber-800 px-4 py-2">
        <div>
          <h1>Hey, UserName</h1>
          <h3>Here's what's happening with your task today.</h3>
        </div>
        <div>
          <button
            onClick={() => {
              console.log("Clicked");
            }}
            className="flex items-center justify-center bg-blue-800 text-white py-2 px-3 rounded-md cursor-pointer"
          >
            <FaPlus />
            Add Task
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center my-6 px-4">
        <div className="flex justify-between items-center gap-2 border-2 rounded-md">
          <div>img</div>
        <div>
          <h1>Total Tasks</h1>
          <h3>24</h3>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-2  border-2 rounded-md">
           <div>img</div>
        <div>
          <h1>Total Tasks</h1>
               <h3>24</h3>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2  border-2 rounded-md">
           <div>img</div>
        <div>
          <h1>Total Tasks</h1>
               <h3>24</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        <div className="w-full ">
          <Tasks />
          <Outlet />
        </div>
        <div className="w-full max-w-md">
  <FullCalendar
    plugins={[dayGridPlugin]}
    initialView="dayGridMonth"
    height={500}
     fixedWeekCount={false}
  />
</div>
      </div>
    </div>
  );
}
