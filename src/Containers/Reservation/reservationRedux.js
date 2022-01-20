import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    payPrice: 0,
  },
  reducers: {
    updatePayPrice: (state, action) => {
      state.payPrice = action.payload;
    },
  },
});

export const { updatePayPrice } = reservationSlice.actions;
export default reservationSlice.reducer;
