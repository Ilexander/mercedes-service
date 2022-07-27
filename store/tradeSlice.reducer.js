import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async function (body) {
    const resp = await fetch("http://localhost:3002/trade_in", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
);

const initialState = {
  tradeStatus: 'waiting',
};

export const tradeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.fulfilled]: (state) => {
      state.tradeStatus = "fulfilled";
    },
    [fetchPost.pending]: (state) => {
      state.tradeStatus = "pending";
    },
    [fetchPost.rejected]: (state) => {
      state.tradeStatus = "rejected";
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = tradeSlice.actions;

export default tradeSlice.reducer;
