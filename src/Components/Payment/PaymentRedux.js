import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
    name: "roomTotalPrice",
    initialState: {
        payPrice: 0,
        hotelOfferId: "",
    },
    reducers: {
        updateRoomTotalPrice: (state, action) => {
            state.payPrice = action.payload
        },
        updateHotelOfferId: (state, action) =>{
            state.hotelOfferId = action.payload
        },
    },
});

export const { updateRoomTotalPrice,updateHotelOfferId } = PaymentSlice.actions;
export default PaymentSlice.reducer;
