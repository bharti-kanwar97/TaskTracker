import { useEffect,useContext } from "react";
import  {TaskContext}  from "../context/TaskContext";
import TaskForm from "../forms/TaskForm";
import { Link, Outlet } from "react-router-dom";
import Setting from "./Settings";
import useTaskAction from "../hooks/useTaskAction";
import Tasks from "./Tasks";
// import {Calender} from "./Calender.jsx";
import { Calendar } from "@fullcalendar/core/index.js";
export default function Home({ className }) {
      const {openForm} = useContext(TaskContext)
  const {fetchTasks} = useTaskAction()
  useEffect(() => {
    if (openForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openForm]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={`${className} bg-white dark:bg-[#0F172A] dark:text-white `}>
     <h1 className="text-white"> hello world</h1>
      <Tasks />
      <Outlet />

      {openForm && (
        <TaskForm />
       )}
    </div>
  );
}
