import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveClass(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setActiveClass } = filterSlice.actions;

export default filterSlice.reducer;
