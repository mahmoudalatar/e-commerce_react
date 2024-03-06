import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.js";
import cartSlice from "./slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
