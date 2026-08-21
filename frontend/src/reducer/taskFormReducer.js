export const initialFormState = {
  
  editId: null,
};
export function taskFormReducer(state, action) {
  switch (action.type) {
    case "SET_NEW_TASK":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET_FORM":
      return {
        ...initialFormState,
      };
    case "UPDATE_FIELD": {
      const { field, value } = action.payload;

      return {
        ...state,
        [field]: value,
      };
    }
    default:
      return state;
  }
}
