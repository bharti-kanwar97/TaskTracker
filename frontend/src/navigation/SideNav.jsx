import {useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import {
  MdOutlineHome,
  MdOutlineCategory,
  MdOutlineListAlt,
  MdCalendarMonth,
  MdAdd,
} from "react-icons/md";
import { IoSettingsOutline, IoCalendarNumberSharp } from "react-icons/io5";
import SettingsContext from "../context/SettingsContext";
import { TaskFormContext } from "../context/TaskFormContext";
import CustomTooltip from "../components/Tooltip";
import { FiSidebar } from "react-icons/fi";
import SidebarContext from "../context/SidebarContext";
import useLoginUser from "../hooks/useLoginUser";
import useMediaQuery from "../hooks/useMediaQuery";
export default function SideNav({ className }) {
  const { formData } = useLoginUser();
  // const {handleFetch} = useRegisterData()
  const { setOpenForm } = useContext(TaskFormContext);
  const { sideBarOpen, setSideBarOpen } = useContext(SidebarContext);
  const { setOpenSettings } = useContext(SettingsContext);
  const links = [
    {name: "Tasks", path: "/home/tasks", icon: <MdOutlineListAlt />},
    {name: "Calender", path: "/home/calender", icon: <MdCalendarMonth />}
  ]
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <>
      {/* {sideBarOpen && ( */}
        <div
          className={`${className} border-r-2 border-gray-200 dark:border-gray-700 min-h-screen w-full `}
        >
          <div className="flex justify-between items-center py-4">
            <div className="">
              <button
                onClick={() => {
                  console.log("clicked on settings");
                  setOpenSettings(true);
                  
                }}
                className="dark:hover:bg-[#263a6a] homelink dark:text-gray-200 dark:bg-[#0F172A] cursor-pointer"
              >
                {/* <IoSettingsOutline className='text-[22px]' /> */}
                <div className="inline-block px-1.5 py-0.5 rounded-full bg-[#98be2f] text-white width-auto text-xs">
                  {formData?.name?.charAt(0).toUpperCase()}
                </div>
                <span>{formData?.name?.toLowerCase()}</span>
              </button>{" "}
            </div>
            <CustomTooltip text="Open/Close sidebar">
              <div className="px-4">
                <FiSidebar
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                  className="text-[18px]"
                />
              </div>
            </CustomTooltip>
          </div>
          <ul className="py-4 px-0">
            <li>
              <button
                onClick={() => {
                  console.log("Clicked");
                  setOpenForm(true);
                }}
                className="dark:hover:bg-[#263a6a] homelink cursor-pointer dark:text-gray-200 dark:bg-[#0F172A]"
              >
                {" "}
                <MdAdd className="text-[20px] inline-block" />
                <span>Add Task</span>
              </button>
            </li>
             {links.map((link) => (
             <li className="" key={link.path}   onClick={() => isMobile && setSideBarOpen(false)}>
              <NavLink
                to={link.path}
                
                className={({isActive}) =>`dark:hover:bg-[#263a6a] homelink dark:text-gray-200 dark:bg-[#0F172A] ${isActive ? "dark:bg-[#1d2e55]" : "dark:bg-[#0F172A]"}`}
              >
                <span className="text-[22px]">{link.icon}</span>
              
                <span>{link.name}</span>
              </NavLink>
            </li>

             ))}


            {/* This is in a implementing mode */}
            {/* <li className=""><Link to="/home/homeDashboard" className="dark:hover:bg-[#263a6a] homelink dark:text-gray-200 dark:bg-[#0F172A]"><IoStatsChartOutline className='text-[22px]' /><span>Home</span></Link> </li> */}
          </ul>
        </div>
      {/* )} */}
    </>
  );
}
