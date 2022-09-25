import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cart from "./slices/cartSlices";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
    user: userReducer,
  },
});
