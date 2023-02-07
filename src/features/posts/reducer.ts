import { createReducer } from '@reduxjs/toolkit';
import { getAll } from './actions';
import { post } from './state'

// const initialState = state;
// export type KanyeState = {
//     data: { quote: string };
//     pending: boolean;
//     error: boolean;
//   };
  
//   const initialState: KanyeState = {
//     data: { quote: 'click that button' },
//     pending: false,
//     error: false,
//   };
  
  export type PostState = {
    isLoading: boolean;
    posts: post[];
    error:boolean;
  };
  //set default valuse state
    const initialState: PostState = {
    isLoading: false,
    posts: [],
    error:false
  };
  
export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAll.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAll.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    })
    .addCase(getAll.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
});

export default postReducer;
