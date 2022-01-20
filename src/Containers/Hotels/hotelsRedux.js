import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotel: {},
    filters: [],
    hotels: [],
    selectedhotel: {},
    selectedroom: {},
  },
  reducers: {
    updateHotel: (state, action) => {
      state.hotel = action.payload;
    },
    updateHotelFilter: (state, action) => {
      state.filters = action.payload;
    },
    updateHotels: (state, action) => {
      state.hotels = action.payload;
    },
    updateSelectedHotel: (state, action) => {
      state.selectedhotel = action.payload;
    },
    updateSelectedRoom: (state, action) => {
      state.selectedroom = action.payload;
    },
  },
});

export const {
  updateHotel,
  updateHotelFilter,
  updateHotels,
  updateSelectedHotel,
  updateSelectedRoom,
} = hotelSlice.actions;
export default hotelSlice.reducer;
