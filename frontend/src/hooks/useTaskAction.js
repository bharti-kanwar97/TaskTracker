import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext.js';
import {api} from '../axios/api.js';
import {useLocation} from 'react-router-dom';
import { toast} from "react-hot-toast";
export default function useTaskAction() {
  const location = useLocation();
  const {taskList,dispatch} = useContext(TaskContext);
  // fetch all tasks
   const fetchTasks = async () => {
    console.log(taskList);
    try {
      
      const response = await api.get("/trackers/");
      console.log("API Response:", response.data);
      dispatch({
    type: "SET_TASKS",
    payload: response.data
});
    } catch (error) {
      console.log(error);
    }
  }; 
  // filter pending tasks
  const pendingTask = taskList.filter(
    (task) => !task.completed
  );
  
  //   filter completed tasks
  const completedTask = taskList.filter(
    task => task.completed
  )
  
  // delete All Task
  const deleteAll = async () => {
      // const confirmDelete = window.confirm(
      //   "Are you sure you want to delete all tasks?",
      // );
      // if (confirmDelete) {
        if (location.pathname === "/home/tasks/all") {
          await api.delete("/trackers/deleteall").then(() => {
            dispatch({
              type: "DELETE_ALL_TASKS",
            });
            toast.success("You have successfully deleted all tasks")
          });
        } else if (location.pathname === "/home/tasks/pending") {
          await api.delete("/trackers/pending");
          dispatch({
            type: "DELETE_PENDING_TASKS",
          });
          toast.success("You have successfully deleted all tasks")
        } else if (location.pathname === "/home/tasks/completed") {
          await api.delete("/trackers/completedTask");
          dispatch({
            type: "DELETE_COMPLETED_TASKS",
          });
          toast.success("You have successfully deleted all tasks")
        }
      // }
    };
  return {completedTask,pendingTask,deleteAll,fetchTasks};
}