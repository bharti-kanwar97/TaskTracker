import { TaskContext } from "../context/TaskContext";
import { TaskFormContext } from "../context/TaskFormContext";
import { useContext, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { api } from "../axios/api.js";
export default function useTaskForm() {
  const { taskList, dispatch } = useContext(TaskContext);
  const { formState, setOpenForm, dispatchForm } = useContext(TaskFormContext);

  const methods = useForm({
    defaultValues: {
      taskName: "",
      dueDate: null,
      category: "",
    },
  });

  useEffect(() => {
    methods.reset({
      taskName: formState.taskName || "",
      dueDate: formState.dueDate || null,
      category: formState.category || "",
    });
  }, [formState.editId, methods.reset]);

  // SUBMIT FORM DATA
  const onSubmit = async (data) => {
    console.log("editId", formState.editId);
    if (!data.taskName.trim()) return;
    try {
      if (formState.editId) {
        const response = await api.put(`/trackers/${formState.editId}`, data);
        console.log(`Updated task with ID ${formState.editId}:`, response.data);

        dispatch({
          type: "UPDATE_TASK",
          payload: response.data,
        });
        dispatchForm({
          type: "RESET_FORM",
        });

        setOpenForm(false);
      } else {
      
        const response = await api.post("/trackers/add", data);
        dispatch({
          type: "ADD_TASK",
          payload: response.data,
        });
        console.log(response.data);
        methods.reset();
        setOpenForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (task) => {
    console.log(`task: ${task.taskName}`);
    console.log(`task: ${task.dueDate}`);
    console.log(`task: ${task.category}`);
    try {
      setOpenForm(true);

      dispatchForm({
        type: "SET_NEW_TASK",
        payload: {
          taskName: task.taskName,
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          category: task.category,
          editId: task._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = async (task) => {
    try {
      const response = await api.put(`/trackers/${task._id}`, {
        completed: !task.completed,
      });
      dispatch({
        type: "UPDATE_TASK",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const closeTab = () => {
    dispatchForm({
      type: "RESET_FORM",
    });
    setOpenForm(false);
  };
  
  return {
    handleUpdate,
    formState,
    onSubmit,
    methods,
    closeTab,
    handleCheckbox,
    taskList,
  };
}
