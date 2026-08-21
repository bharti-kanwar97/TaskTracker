
import TaskTitle from "../components/TaskForm/TaskTitle";
import DueDate from "../components/TaskForm/DueDate";
import useTaskForm from "../hooks/useTaskForm";
import TaskCategory from "../components/TaskForm/TaskCategory";
import AddTaskButton from "../components/TaskForm/AddTaskButton";
import TaskHeader from "../components/TaskForm/TaskHeader";
import { FormProvider } from "react-hook-form";

function TaskForm() {
   const {onSubmit,methods} = useTaskForm();



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-[#101b39] rounded-xl shadow-2xl w-full max-w-2xl p-8 relative">
        <div className=" w-full max-w-lg p-4 mx-auto">
          <TaskHeader />

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-2 px-2 py-4 rounded-lg"
            >
              <TaskTitle />
              <DueDate />
              <TaskCategory />
              <AddTaskButton />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
