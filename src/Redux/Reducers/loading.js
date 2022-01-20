import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
    showBlackdrop: false,
  },
  reducers: {
    updateLoading(state, action) {
      state.loading = action.payload;
    },
    updateBlackdrop(state, action) {
      state.showBlackdrop = action.payload;
    },
  },
});

const { actions, reducer: loading } = loadingSlice;

const { updateLoading, updateBlackdrop } = actions;

export { loading, updateLoading, updateBlackdrop };
