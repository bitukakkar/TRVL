import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "searchAndFilterRedux",
  initialState: {
    isFooterShow: true,
  },
  reducers: {
    setIsFooterShow: (state, action) => {
      state.isFooterShow = action.payload;
    },
  },
});

export const { setIsFooterShow } = userSlice.actions;
export default userSlice.reducer;
