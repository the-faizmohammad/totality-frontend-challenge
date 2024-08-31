import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await fetch('https://66d36bd6184dce1713d0280d.mockapi.io/api/v1/properties');
  return response.json();
});

const propertySlice = createSlice({
  name: 'properties',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default propertySlice.reducer;
