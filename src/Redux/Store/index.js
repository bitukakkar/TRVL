import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import createRootReducer from "../rootReducer";

const rootReducer = createRootReducer();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["hotelDetails", "hotel", "search", "walletInfo", "roomTotalPrice", "authToken", "tokenReward"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
