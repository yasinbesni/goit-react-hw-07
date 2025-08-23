import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filters.actions;
export default filters.reducer;

export const selectStatusFilter = (state) => state.filters.name;
