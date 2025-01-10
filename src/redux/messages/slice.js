import { createSlice } from '@reduxjs/toolkit';
import { sendMessageThunk } from './messagesOperations';

const initialState = {
  message: null,
  thank: null,
  wait: null,
  loading: false,
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    deleteMessages: state => {
      state.message = null;
    },
    addThank: state => {
      state.thank = 'Thank you for the trust';
    },
    addWait: state => {
      state.wait = 'Upgrading minute ...';
    },
    falseLoading: state => {
      state.loading = false;
    },
    delThankAndWait: state => {
      state.thank = null;
      state.wait = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.message = action.payload;
        state.message = 'URRAAAAAAA';
      })
      .addCase(sendMessageThunk.rejected, (state, action) => {
        state.message = 'Please try again';
      })
      .addCase(sendMessageThunk.pending, state => {
        state.loading = true;
      });
  },
});

export const messagesReducer = slice.reducer;
export const {
  addMessages,
  deleteMessages,
  addThank,
  addWait,
  delThankAndWait,
  falseLoading,
} = slice.actions;
