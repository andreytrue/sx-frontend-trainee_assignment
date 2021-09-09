import { ApiRoute } from '../utils/const';
import { 
  loadComment, 
  loadID, 
  loadSelectedStory, 
  loadStory,
} from './action';

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
    .then((res) => {
      switch (res[0].type) {
        case 'story':
          dispatch(loadStory(res))
          break
        case 'comment':
          dispatch(loadComment(res))
          break
        default:
          break
      }
    })
};

export const fetchSelectedStory = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.ITEM}${id}.json`)
      .then(({data}) => dispatch(loadSelectedStory(data)))
)
