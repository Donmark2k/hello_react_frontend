import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingsSlice.js';

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;