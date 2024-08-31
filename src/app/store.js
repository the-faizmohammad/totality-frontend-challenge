import configureStore from '@reduxjs/toolkit';
import listingsReducer from '../features/listings/listingsSlice';

export default configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
