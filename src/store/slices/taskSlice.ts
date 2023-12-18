import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "@/models/task";

interface storeType {
  last_id: number;
  tasks: TaskType[];
}
const initialState: storeType = {
  last_id: 0,
  tasks: [{ id: 0, name: "this is the initial task", status: false }],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newId = state.last_id + 1;
      state.tasks.push({ id: newId, name: action.payload, status: false });
      state.last_id = newId;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const newArr = state.tasks.filter((value) => action.payload !== value.id);
      state.tasks = [...newArr];
    },
    checkTask: (state, action: PayloadAction<number>) => {
      const newArr = state.tasks.map((value, _) => {
        if (action.payload === value.id) {
          return { ...value, status: !value.status };
        } else {
          return value;
        }
      });
      state.tasks = [...newArr];
    },
  },
});

export const { addTask, deleteTask, checkTask } = taskSlice.actions;
export default taskSlice.reducer;
