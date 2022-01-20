import { createSlice } from '@reduxjs/toolkit'

const TokenPackInfo = createSlice({
  name: 'tokenPackInfo',
  initialState: {
    pack: null,
  },
  reducers: {
    saveTokenCardPack: (state, action) => {
      state.pack = action.payload
    },

    clearSaveTokenCardPack: (state, action) => {
      state.pack = null
    },
  },
})

export const { saveTokenCardPack, clearSaveTokenCardPack } = TokenPackInfo.actions
export default TokenPackInfo.reducer
