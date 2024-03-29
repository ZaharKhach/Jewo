import { configureStore } from '@reduxjs/toolkit';
import globalSlice from '../slices/globalSlice';

const store = configureStore({
    reducer: {globalSlice}
});

export default store;