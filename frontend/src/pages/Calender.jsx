import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import {TaskFormContext} from '../context/TaskFormContext'
import TaskForm from "../forms/TaskForm";
import {Outlet} from 'react-router-dom'
import "../calender.css";
import {formatDate} from '../utils/formatDate'
export default function Calender() {
    const {openForm} = useContext(TaskFormContext)
  const { taskList } = useContext(TaskContext);
  
  const events = taskList.map((task) => (
    {
    
    id: task._id,
    title: task.taskName,
    date: formatDate(task.dueDate),
    extendedProps: {
    completed: task.completed,
  },
  }));

  return (
    <div className="h-[calc(100vh-56px)] dark:bg-[#0F172A] py-8 ">
      <div className="w-[80%] mx-auto">
        <FullCalendar
          height="650px"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
      eventClassNames={(arg) =>
  arg.event.extendedProps.completed
    ? ["completed-event","opacity-60"]
    : []
}
          displayEventTime={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          fixedWeekCount={false}
        />
      </div>
     <Outlet />
 {openForm && <TaskForm />}
    </div>
  );
}
