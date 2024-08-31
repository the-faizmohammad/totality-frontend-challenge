import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch listings
export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async (filters) => {
    const response = await axios.get('https://api.rentcast.io/v1/listings/rental/long-term', {
      params: filters,
    });
    return response.data;
  }
);

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    properties: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default listingsSlice.reducer;
