import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
