import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userinfo: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userinfo = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
