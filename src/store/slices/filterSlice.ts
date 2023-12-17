import { filterStatus, TaskFilterType } from "@/models/filter";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskFilterType = { status: "ALL" as filterStatus };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<filterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = filterSlice.actions;
export default filterSlice.reducer;
