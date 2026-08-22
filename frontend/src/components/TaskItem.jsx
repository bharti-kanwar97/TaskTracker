import { useState } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import useTaskForm from "../hooks/useTaskForm";
import useDeleteTask from "../hooks/useDeleteTask";
import MoreOptions from "./MoreOptions";
export default function TaskItem({ task }) {
  const { handleUpdate, handleCheckbox } = useTaskForm();
  const { handleDelete } = useDeleteTask();
  const [moreOption, setMoreOption] = useState(false);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 text-center bg-gray-100 dark:bg-[#131e3b] font-semibold p-3 rounded-lg group">
      <label className="flex items-center  gap-1 sm:gap-2">
        <div className="w-auto px-2 py-2">
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={() => handleCheckbox(task)}
            className="w-4 h-4 rounded border-slate-400 text-[#2563EB] focus:ring-[#2563EB] cursor-pointer
  "
          />
        </div>
        <div className="w-full py-2 text-[15px] font-medium">
          <span className={task.completed ? "line-through" : ""}>
            {task.taskName}
          </span>
        </div>
      </label>
      <div className="hidden sm:flex items-center justify-center text-[15px] font-medium">
        {new Date(task.dueDate)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/-/g, " ")}
      </div>
      <div className="hidden sm:flex items-center justify-center text-[15px] font-medium">
        {task.category}
      </div>
      <div className="w-auto px-2 hidden sm:flex gap-2 items-center justify-center">
        <button
          aria-label="Edit task"
          onClick={() => handleUpdate(task)}
          className="bg-[#0369A1] text-white hover:bg-[#075985] py-2 px-4 rounded-md font-medium cursor-pointer"
        >
          Edit
        </button>
        <button
          aria-label="Delete a task"
          onClick={() => handleDelete(task._id)}
          className="bg-[#B91C1C] text-white hover:bg-[#991B1B] py-2 px-4 rounded-md font-medium cursor-pointer"
        >
          Delete
        </button>
      </div>
      <div className="relative w-auto px-2  group-hover:flex items-center justify-center sm:hidden">
        <button
          onClick={() => {
            setMoreOption(!moreOption);
            console.log("click on more option button");
          }}
          
          className="p-1.5 border-2 rounded-full cursor-pointer"
        >
          <MdOutlineMoreHoriz className="text-2xl " />
        </button>
        {moreOption && <MoreOptions />}
      </div>
    </div>
  );
}
