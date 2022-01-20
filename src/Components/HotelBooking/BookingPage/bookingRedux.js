import { createSlice } from "@reduxjs/toolkit";

const BookingPageSlice = createSlice({
  name: "bookingPageInfo",
  initialState: {
    customerFistName: "",
    customerLastName: "",
    customerEmail: "",
    areYouGuest: "yes",
  },
  reducers: {
    updateCustomerFistName: (state, action) => {
      state.customerFistName = action.payload;
    },
    updateCustomerLastName: (state, action) => {
      state.customerLastName = action.payload;
    },
    updateCustomerEmail: (state, action) => {
      state.customerEmail = action.payload;
    },
    updateAreYouGuest: (state, action) => {
      state.areYouGuest = action.payload;
    },
  },
});
export const { updateCustomerFistName, updateCustomerLastName, updateAreYouGuest, updateCustomerEmail } = BookingPageSlice.actions;
export default BookingPageSlice.reducer;
