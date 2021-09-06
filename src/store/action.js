import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_LIST: 'load/list',
  LOAD_NEWS: 'load/news',
  LOAD_COMMENT: 'load/comment',
};

export const loadID = createAction(ActionType.LOAD_LIST, (list) => ({
  payload: list,
}));

export const loadItem = createAction(ActionType.LOAD_NEWS, (news) => ({
  payload: news,
}));

export const loadComment = createAction(ActionType.LOAD_COMMENT, (comment) => ({
  payload: comment,
}))
