// src/jokeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJokes = createAsyncThunk("jokes/fetch", async () => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/jokes/ten"
  );
  return response.data;
});

const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jokeSlice.reducer;
