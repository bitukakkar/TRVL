import { createSlice } from "@reduxjs/toolkit";

const authTokenSlice = createSlice({
  name: "authToken",
  initialState: {
    authToken: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    removeAuthToken: (state) => {
      state.authToken = null;
    },
  },
});

export const { setAuthToken, removeAuthToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;
