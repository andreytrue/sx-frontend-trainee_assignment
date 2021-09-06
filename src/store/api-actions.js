import { ApiRoute } from '../utils/const';
import { loadComment, loadID, loadItem } from './action';

export const fetchID = () => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.ID}.json`)
    .then(({data}) => dispatch(loadID(data)))
);

export const fetchItem = (id) => (dispatch, _getState, api) => {
  const fetchData = (id) => {
    return api.get(`${ApiRoute.ITEM}${id}.json`)
      .then(({data}) => data)
  }

  Promise.all(id.map(fetchData))
    .then((resp) => {
      switch (resp[0].type) {
        case 'story':
          return dispatch(loadItem(resp))
        case 'comment':
          return dispatch(loadComment(resp))
        default:
          break
      }
    })
}
