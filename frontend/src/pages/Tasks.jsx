import {useState,useEffect} from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteSweep,MdAdd } from "react-icons/md";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import {TaskFormContext} from '../context/TaskFormContext'
import TaskForm from '../forms/TaskForm.jsx';
import ConfirmModal from "../components/ConfirmModal.jsx";
import Settings from "./Settings.jsx";
import useTaskAction from "../hooks/useTaskAction";
import {links} from "../constants/navLinks.js"
import SettingsContext from '../context/SettingsContext';
import { MdOutlineMoreHoriz } from "react-icons/md";
import MoreLinks from "../components/MoreLinks.jsx";
export default function Tasks() {
 const {openSettings} = useContext(SettingsContext)
  const {openForm,setOpenForm} = useContext(TaskFormContext)
  const {deleteAll,fetchTasks} = useTaskAction()
  const [openDialog,setOpenDialog] = useState(false)
  const [openLinks,setOpenLinks] = useState(false)
  useEffect(() => {
    fetchTasks();
  }, []);

 
  return (
    <div className="bg-white relative min-w-0 overflow-x-hidden">
      <div className="flex justify-between items-center py-4 px-4 sm:px-10 relative">
        <h1 className="text-4xl font-semibold text-[#0F172A] dark:text-white">
          Tasks
        </h1>
        <div className="hidden sm:flex gap-4">
          <button
            onClick={() => {
    console.log("Clicked");
    setOpenForm(true);
  }}
            className="flex items-center justify-center bg-blue-800 text-white py-2 px-3 rounded-md cursor-pointer"
          >
            <MdAdd className="text-[20px]" />
            Add Task
          </button>
        </div>
      </div>
      
      <div className=" px-4 sm:px-8">
        <div className=" dark:bg-[#0F172A] flex justify-end sm:justify-between items-center shadow-2xl border-2 border-gray-300 dark:border-gray-600 w-[98%] py-3 px-5 mx-auto rounded-lg bg-white">
          <div className="hidden sm:flex">
            {links.map((link) => (
              <NavLink
              key={link.path}
              to={link.path}
              className={({isActive}) =>`hover:text-blue-500 dark:hover:text-blue-600 px-2 border-b-2 hover:border-blue-500 dark:hover:border-blue-700 mx-2 py-0.5 ${isActive ? "text-blue-500 dark:text-blue-600 border-blue-500 dark:border-blue-700 border-b-2" : "text-gray-600 dark:text-neutral-200 border-gray-600 dark:border-neutral-200"} `}
            >
              {link.name}
            </NavLink> 
            ))}
          </div>
   
       
 <div className="flex items-center justify-center gap-0.5 sm:gap-2">
    <button 
            onClick={() => {
    console.log("Clicked");
    setOpenForm(true);
    
  }}
            className="flex sm:hidden items-center justify-center hover:bg-blue-900 hover:text-white  text-neutral-900 p-1 rounded-full cursor-pointer z-0"
          >
            <MdAdd className="text-[24px]" />
          </button>
 <button
            aria-label="delete all tasks"
            onClick={() => {setOpenDialog(true)}}
            className="mx-0.5 flex sm:hidden"
          >
            <MdDeleteSweep className="cursor-pointer text-[24px] sm:text-[30px] hover:text-[#991B1B] text-[#B91C1C]" />
          </button>

        <button
          onClick={() => {
            console.log("click on more option button");
            setOpenLinks(!openLinks)
          }}
           className="mx-0.5 flex sm:hidden relative"
        >
          <MdOutlineMoreHoriz className="text-[24px] " />
        </button>
        {openLinks && <MoreLinks setOpenLinks={setOpenLinks} />}
 </div>
         
      
         
      </div>
</div>
      <Outlet />
 {openForm && <TaskForm />}
 {openSettings && <Settings />}
 {openDialog && <ConfirmModal  onConfirm={deleteAll}
    onCancel={() => setOpenDialog(false)}  />}
    </div>
  );
}
