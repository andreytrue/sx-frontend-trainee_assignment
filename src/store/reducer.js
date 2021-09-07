import { createReducer } from '@reduxjs/toolkit';
import { loadID, loadStory, loadComment } from './action';
import { adaptIDlist, addKidsComments } from '../utils/common';

const initialState = {
  IDlist: [],
  stories: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadID, (state, action) => {
      state.IDlist = adaptIDlist(action.payload);
    })
    .addCase(loadStory, (state, action) => {
      state.stories = action.payload;
    })
    .addCase(loadComment, (state, action) => {
      state.comments = addKidsComments(state.comments, action.payload);
    });
});

export {reducer};
