import { configureStore } from '@reduxjs/toolkit';

import appReducer from './reducers/reducer';

const store = configureStore({
  reducer: {
    markets: appReducer,
    // if we had other reducers, they would go here
  },
});

export default store;
