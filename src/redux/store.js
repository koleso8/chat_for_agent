import { configureStore } from '@reduxjs/toolkit';

import { messagesReducer } from './messages/slice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
