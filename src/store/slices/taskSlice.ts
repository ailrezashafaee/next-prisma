import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "@/models/task";
import { act } from "react-dom/test-utils";

const initialState: TaskType[] = [{ id: 0, name: "fist tastk", status: false }];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload);
    },
  },
});
