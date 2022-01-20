import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
