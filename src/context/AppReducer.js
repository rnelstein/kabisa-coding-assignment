const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };

    default:
      return state;
  }
};
export default AppReducer;
