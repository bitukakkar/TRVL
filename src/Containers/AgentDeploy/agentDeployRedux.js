import { createSlice } from "@reduxjs/toolkit";

const agentDeploySlice = createSlice({
  name: "agentDeploy",
  initialState: {
    agentAddress: "",
  },
  reducers: {
    updateAgentAddress: (state, action) => {
      state.agentAddress = action.payload;
    },
  },
});

export const { updateAgentAddress } = agentDeploySlice.actions;
export default agentDeploySlice.reducer;
