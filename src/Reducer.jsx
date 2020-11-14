const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "FETCH":
      return action.data;
    default:
      throw new Error("oops");
  }
};

export default Reducer;
