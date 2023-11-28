const rateReducer = (state, action) => {
  switch (action.type) {
    case "SET_MIN_RATE":
      return action.payload;
    default:
      return state;
  }
};

export default rateReducer;
