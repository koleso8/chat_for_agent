import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendMessageThunk = createAsyncThunk(
  'sendMessage',
  async (sendMessage, thunkAPI) => {
    try {
      const { data } = await axios.get('GPT', sendMessage);

      console.log(sendMessage);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
