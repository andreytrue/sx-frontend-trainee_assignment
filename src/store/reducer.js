import { createReducer } from '@reduxjs/toolkit';
import { loadID, loadItem, loadComment } from './action';
import { adaptIDList } from '../utils/common';

const initialState = {
  id: [],
  news: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadID, (state, action) => {
      state.id = adaptIDList(action.payload);
    })
    .addCase(loadItem, (state, action) => {
      state.news = action.payload;
    })
    .addCase(loadComment, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
