import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    address: "",
    network: "",
    networkID: "",
  },
  reducers: {
    updateUserAddress: (state, action) => {
      state.address = action.payload;
    },
    updateNetwork(state, action) {
      state.network = action.payload;
    },
    updateNetworkID(state, action) {
      state.networkID = action.payload;
    },
    removeUser: (state) => {
      state.address = "";
      state.network = "";
      state.networkID = "";
    },
  },
});

export const { updateUserAddress, updateNetwork, updateNetworkID, removeUser } = userSlice.actions;
export default userSlice.reducer;
