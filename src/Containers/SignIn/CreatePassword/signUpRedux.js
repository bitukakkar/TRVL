import { createSlice } from "@reduxjs/toolkit";

const signUpInfoSlice = createSlice({
  name: "signUpInfo",
  initialState: {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    eth_address: "",
    btc_address: "",
    fet_address: "",
    password: "",
    showEmailField: true,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setShowEmail: (state, action) => {
      state.showEmailField = action.payload;
    },
  },
});

export const { setEmail, setPassword, setShowEmail } = signUpInfoSlice.actions;
export default signUpInfoSlice.reducer;
