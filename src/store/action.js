import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_LIST: 'load/list',
  LOAD_ITEM: 'load/item'
};

export const loadID = createAction(ActionType.LOAD_LIST, (list) => ({
  payload: list,
}));

export const loadItem = createAction(ActionType.LOAD_ITEM, (item) => ({
  payload: item,
}));
