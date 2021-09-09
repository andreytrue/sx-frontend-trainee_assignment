import { createReducer } from '@reduxjs/toolkit';
import { loadID, loadStory, loadComment, loadSelectedStory, resetSelectedStory, resetComments, selectedStoryIsLoading } from './action';
import { adaptIDList, addKidsComments } from '../utils/common';

const initialState = {
  IDList: [],
  isIDListLoaded: false,
  stories: [],
  isStoriesLoaded: false,
  comments: [],
  selectedStory: [],
  isSelectedStoryLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadID, (state, action) => {
      state.IDList = adaptIDList(action.payload);
      state.IDListStatus = true;
    })
    .addCase(loadStory, (state, action) => {
      state.stories = action.payload;
      state.isStoriesLoaded = true;
    })
    .addCase(loadComment, (state, action) => {
      state.comments = addKidsComments(state.comments, action.payload);
      state.isCommentsLoaded = true;
    })
    .addCase(loadSelectedStory, (state, action) => {
      state.selectedStory = action.payload;
      state.isSelectedStoryLoaded = true;
    })
    .addCase(resetSelectedStory, (state) => {
      state.selectedStory = [];
    })
    .addCase(resetComments, (state) => {
      state.comments = [];
    })
    .addCase(selectedStoryIsLoading, (state, action) => {
      state.isSelectedStoryLoaded = action.payload;
    })
});

export {reducer};
