import { createSlice } from "@reduxjs/toolkit";

const WalletSlice = createSlice({
  name: "walletInfo",
  initialState: {
    chargeCode: null,
  },
  reducers: {
    updateChargeCode: (state, action) => {
      state.chargeCode = action.payload;
    },
  },
});

export const { updateChargeCode } = WalletSlice.actions;
export default WalletSlice.reducer;
