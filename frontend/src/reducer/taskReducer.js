export const initialState = {
  taskList: [],
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        taskList: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        taskList: state.taskList.filter((task) => task._id !== action.payload),
      };
    case "DELETE_ALL_TASKS":
      return {
        ...state,
        taskList: [],
      };
      case "DELETE_PENDING_TASKS":
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.completed),
      }
      case "DELETE_COMPLETED_TASKS":
      return {
        ...state,
        taskList: state.taskList.filter((task) => !task.completed),
      }
    case "UPDATE_TASK":
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task._id === action.payload._id ? action.payload : task,
        ),
      };
    case "SHOW_COMPLETED":
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.completed),
      };
  }
  return state;
}
