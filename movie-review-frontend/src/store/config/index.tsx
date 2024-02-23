import { configureStore } from "@reduxjs/toolkit";
import movierReducer from "../movieSlice";

const store = configureStore({
  reducer: {
    movie: movierReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
