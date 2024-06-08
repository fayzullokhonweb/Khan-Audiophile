import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/productsSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
