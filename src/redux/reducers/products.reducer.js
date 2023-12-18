import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("products/fetch/fulfilled", (state, action) => {
      state.products = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
