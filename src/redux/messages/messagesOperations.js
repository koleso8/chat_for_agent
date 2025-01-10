import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const prompt =
  'Please give me an answer with a description of what language the code is written in, briefly what the code is about and rate it from 0 to 100 and write it down in the score. Tell me how it can be improved and give an example of improved code. Here is the code that needs to be evaluated:  ';

export const sendMessageThunk = createAsyncThunk(
  'sendMessage',
  async (sendMessage, thunkAPI) => {
    try {
      const { data } = await axios.get('sdfsdf', prompt + sendMessage);

      console.log(prompt + sendMessage);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
