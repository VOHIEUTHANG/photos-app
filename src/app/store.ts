import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/PhotoSlice";

const rootReducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
