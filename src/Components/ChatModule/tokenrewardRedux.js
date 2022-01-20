import { createSlice } from '@reduxjs/toolkit'

const tokenRewardSlice = createSlice({
  name: 'tokenReward',
  initialState: {
    tokenreward: '',
    fulltokenreward: ''
  },
  reducers: {
    setTokenReward: (state, action) => {
      state.tokenreward = action.payload
    },
    setFullTReward: (state, action) => {
      state.fulltokenreward = action.payload
    },
    resetTokenReward: state => {
      state.tokenreward = ''
    }
  }
})

export const {
  setTokenReward,
  resetTokenReward,
  setFullTReward
} = tokenRewardSlice.actions
export default tokenRewardSlice.reducer
