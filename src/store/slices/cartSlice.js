import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);

      if (findProduct) {
        findProduct.quantity++;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((e) => e.id != action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
