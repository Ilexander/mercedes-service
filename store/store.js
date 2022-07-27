import { configureStore } from "@reduxjs/toolkit";
import status from "./tradeSlice.reducer";
import creditStatus from "./creditSlice.reducer";

const store = configureStore({
  reducer: {
    status,
    creditStatus,
  },
});

export default store

