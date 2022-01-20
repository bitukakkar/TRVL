import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    checkIn: "",
    checkOut: "",
    searchTxt: null,
    noOfGuest: 1,
    totalkids: 0,
    agentName: "",
    currency: "",
    totalroom: 1,
    priceRange: "200-300",
    addressDetails: {
      country: "",
      county: "",
      city: "",
      cityCode: "",
    },
  },
  reducers: {
    updateCheckin: (state, action) => {
      state.checkIn = action.payload;
    },
    updateCheckout: (state, action) => {
      state.checkOut = action.payload;
    },
    updateLocation: (state, action) => {
      state.searchTxt = action.payload;
    },
    updateGuestCount: (state, action) => {
      state.noOfGuest = action.payload;
    },
    updateAddressDetails: (state, action) => {
      state.addressDetails = action.payload;
    },
    resetAddressDetails: (state) => {
      state.addressDetails = {
        country: "",
        county: "",
        city: "",
        cityCode: "",
      };
    },
    updateAgentName: (state, action) => {
      state.agentName = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updatePricerange: (state, action) => {
      state.priceRange = action.payload;
    },
    updateKidsCount: (state, action) => {
      state.totalkids = action.payload;
    },
    updateRoomCount: (state, action) => {
      state.totalroom = action.payload;
    },
    resetHotelSearch: (state) => {
      state.checkIn = "";
      state.checkOut = "";
      state.searchTxt = "";
      state.noOfGuest = 1;
      state.totalkids = 0;
      state.priceRange = "200-300";
      state.totalroom = 1;
      state.addressDetails = {
        country: "",
        county: "",
        city: "",
      };
    },
  },
});

export const {
  updateCheckin,
  updateCheckout,
  updateLocation,
  updateGuestCount,
  updateAddressDetails,
  resetAddressDetails,
  resetHotelSearch,
  updateAgentName,
  updateCurrency,
  updatePricerange,
  updateKidsCount,
  updateRoomCount,
} = searchSlice.actions;
export default searchSlice.reducer;
