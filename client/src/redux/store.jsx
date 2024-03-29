import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.reducer";
import providerSlice from "./provider/provider.reducer";


export const store = configureStore({
  reducer: {
    user: userSlice,
    provider: providerSlice,
   
  },
});