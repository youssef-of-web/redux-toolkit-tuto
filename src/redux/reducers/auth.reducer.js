import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  connected: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      state.data = action.payload;
      state.connected = true;
    },
    logout: (state) => {
      state.data = {};
      state.connected = false;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
