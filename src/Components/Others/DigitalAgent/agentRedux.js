import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "agentRegisterDetails",
  initialState: {
    name: "",
    image: {
      src: "",
      alt: "Agent",
    },
    address: null,
    checkIn: "",
    checkOut: "",
    guestCount: 0,
    filters: [],
    isFormFinishAgentSetup: false,
  },
  reducers: {
    setAgentName: (state, action) => {
      state.name = action.payload;
    },
    setAgentImage: (state, action) => {
      state.image.src = action.payload;
    },
    removeAgentImage: (state) => {
      state.image.src = "";
    },
    setAgentAddress: (state, action) => {
      state.address = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuestCount: (state, action) => {
      state.guestCount = action.payload;
    },
    setIncreaseGuestCount: (state) => {
      state.guestCount = state.guestCount + 1;
    },
    setDecreaseGuestCount: (state) => {
      if (state.guestCount < 1) return;
      state.guestCount = state.guestCount - 1;
    },
    setAgentFilters: (state, action) => {
      state.filters = action.payload;
    },
    setIsFormFinishAgentSetup: (state, action) => {
      state.isFormFinishAgentSetup = action.payload;
    },
  },
});

export const {
  setAgentImage,
  removeAgentImage,
  setAgentName,
  setCheckIn,
  setCheckOut,
  setGuestCount,
  setIncreaseGuestCount,
  setDecreaseGuestCount,
  setAgentAddress,
  setAgentFilters,
  setIsFormFinishAgentSetup,
} = userSlice.actions;
export default userSlice.reducer;
