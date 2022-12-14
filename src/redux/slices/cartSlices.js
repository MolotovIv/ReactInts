import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return +obj.price + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items.filter((obj) => !(obj.id === action.payload)); //!!!!
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
