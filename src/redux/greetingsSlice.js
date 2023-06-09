import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "/greetings/random.json"; // Update the URL to match the correct endpoint

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default greetingSlice.reducer; // Export the reducer instead of the entire slice