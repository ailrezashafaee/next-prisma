import { configureStore, MiddlewareAPI } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import filterSlice from "./slices/filterSlice";
export const store = configureStore({
  reducer: { taskReducer, filterSlice },
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
