import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_LIST: 'load/list',
  LOAD_STORY: 'load/story',
  LOAD_COMMENTS: 'load/comments',
  RESET_COMMENTS: 'reset/comments',
  LOAD_SELECTED_STORY: 'load/selectedStory',
  RESET_SELECTED_STORY: 'reset/selectedStory',
  STORY_IS_LOADING: 'isLoading/story',
};

export const loadID = createAction(ActionType.LOAD_LIST, (list) => ({
  payload: list,
}));

export const loadStory = createAction(ActionType.LOAD_STORY, (stories) => ({
  payload: stories,
}));

export const loadComment = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const resetComments = createAction(ActionType.RESET_COMMENTS);

export const loadSelectedStory = createAction(ActionType.LOAD_SELECTED_STORY, (story) => ({
  payload: story,
}));

export const resetSelectedStory = createAction(ActionType.RESET_SELECTED_STORY);

export const selectedStoryIsLoading = createAction(ActionType.STORY_IS_LOADING, (isLoading) => ({
  payload: isLoading,
}));
