import { createSlice } from "@reduxjs/toolkit";

const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: {
    agent: {
      host: "",
      port: "",
    },
  },
  reducers: {
    updateAgent: (state, action) => {
      state.agent = action.payload;
    },
  },
});

export const { updateAgent } = hotelDetailsSlice.actions;
export default hotelDetailsSlice.reducer;
