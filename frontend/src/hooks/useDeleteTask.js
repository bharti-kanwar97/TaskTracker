import { api } from "../axios/api";
import {useContext} from "react";
import { TaskContext } from "../context/TaskContext";
export default function useDeleteTask() {
  const {dispatch} = useContext(TaskContext)
  const handleDelete = async (id) => {
    try {
      await api.delete(`/trackers/${id}`);
     dispatch({
      type: "DELETE_TASK",
      payload: id
     })
    } catch (error) {
      console.log(error);
    }
  };
  return { handleDelete };
}
