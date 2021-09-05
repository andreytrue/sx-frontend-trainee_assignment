import { createReducer } from '@reduxjs/toolkit';
import { loadID, loadItem } from './action';
import { adaptIDList } from '../utils/common';

const initialState = {
  id: [],
  news: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadID, (state, action) => {
      state.id = adaptIDList(action.payload);
    })
    .addCase(loadItem, (state, action) => {
      state.news = action.payload;
    });
});

export {reducer};
