import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { post } from './state'
export const getAll = createAsyncThunk('posts/post', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
console.log('poooosttttsss');
console.log(response.data);

  return response.data;
});


 