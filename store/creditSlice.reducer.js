import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCredit = createAsyncThunk(
  "post/fetchCredit",
  async function (body) {
    const resp = await fetch("http://localhost:3002/credit", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
);

const initialState = {
  creditStatus: "waiting",
};

export const creditSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCredit.fulfilled]: (state) => {
      state.creditStatus = "fulfilled";
    },
    [fetchCredit.pending]: (state) => {
      state.creditStatus = "pending";
    },
    [fetchCredit.rejected]: (state) => {
      state.creditStatus = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = creditSlice.actions;

export default creditSlice.reducer;
