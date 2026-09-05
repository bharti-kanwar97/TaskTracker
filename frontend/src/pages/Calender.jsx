import { useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskFormContext } from "../context/TaskFormContext";
import TaskForm from "../forms/TaskForm";
import { Outlet } from "react-router-dom";
import "../calender.css";
import { formatDate } from "../utils/formatDate";
import SidebarContext from "../context/SidebarContext.js";
export default function Calender() {
  const { sideBarOpen } = useContext(SidebarContext);
  const { openForm } = useContext(TaskFormContext);
  const { taskList } = useContext(TaskContext);
  const calendarRef = useRef(null);
  const events = taskList.map((task) => ({
    id: task._id,
    title: task.taskName,
    date: formatDate(task.dueDate),
    extendedProps: {
      completed: task.completed,
    },
  }));
  useEffect(() => {
    const calendar = calendarRef.current?.getApi();

    if (!calendar) return;

    const timer = setTimeout(() => {
      calendar.updateSize();
    }, 1100);

    return () => clearTimeout(timer);
  }, [sideBarOpen]);

  return (
    <div className="h-[calc(100vh-56px)] dark:bg-[#0F172A] py-8 bg-white min-w-0 w-full">
      <div className="w-[100%] sm:px-10 mx-auto">
        <FullCalendar
          ref={calendarRef}
          height="650px"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // Mobile touch/swipe
          handleWindowResize={true}
          longPressDelay={100}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          eventClassNames={(arg) =>
            arg.event.extendedProps.completed
              ? ["completed-event", "opacity-60"]
              : []
          }
          displayEventTime={false}
          selectable={true}
          editable={false}
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
