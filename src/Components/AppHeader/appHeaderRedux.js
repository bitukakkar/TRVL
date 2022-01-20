import { createSlice } from "@reduxjs/toolkit";

const defaultState = [false, 360, "#c4edec"]; // 2nd value is nav background height

const headerSlice = createSlice({
  name: "headerBgInfo",
  initialState: {
    showNavBgInfo: defaultState,
  },
  reducers: {
    setShowNavBg: (state, action) => {
      state.showNavBgInfo = action.payload;
    },
    setHideNavBg: (state) => {
      state.showNavBgInfo = defaultState;
    },
  },
});

export const { setShowNavBg, setHideNavBg } = headerSlice.actions;
export default headerSlice.reducer;
