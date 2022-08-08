export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

const initalState = [];

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [action.payload, ...state];
    case DELETE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id);
    default:
      return state;
  }
};
export default  reducer;
