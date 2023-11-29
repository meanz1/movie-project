import { SET_MIN_RATE } from "../actions";

const rateReducer = (state = 3, action) => {
  switch (action.type) {
    case SET_MIN_RATE:
      return action.payload;
    default:
      return state;
  }
};

export default rateReducer;
