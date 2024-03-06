import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  () => {
    const products = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json)
    console.log(products)
    return products
  }
)

const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const {} = productSlice.actions
export default productSlice.reducer
