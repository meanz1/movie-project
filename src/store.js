import { configureStore } from "@reduxjs/toolkit";
import rateReducer from "./reducers/rateReducer";
export default configureStore({
  reducer: {
    rate: rateReducer,
  },
});
