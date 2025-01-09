import { createSlice } from '@reduxjs/toolkit';
import { sendMessageThunk } from './messagesOperations';

const initialState = {
  messages: [],
  loading: false,
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: (state, action) => {
      state.messages = prev => prev.push(action.payload);
    },
    deleteMessages: state => {
      state.messages = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.messages = [...state.messages, action.payload];
      })
      .addCase(sendMessageThunk.rejected, (state, action) => {})
      .addCase(sendMessageThunk.pending, state => {
        state.loading = true;
      });
  },
});

export const messagesReducer = slice.reducer;
export const { addMessages, deleteMessages } = slice.actions;
