import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cart from "./slices/cartSlices";

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
  },
});
