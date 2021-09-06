import React, { useEffect } from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getID } from '../../store/selectors';
import { fetchItem } from '../../store/api-actions';
import browserHistory from '../../browser-history';

import MainScreen from '../main-screen/main-screen';
import { AppRoute } from '../../utils/const';
import CommentsScreen from '../comments-screen/comments-screen';

function App() {
  const id = useSelector(getID);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id.length > 0) {
      dispatch(fetchItem(id));
    }
  }, [id, dispatch]);

  return (
    <BrowserRouter history={ browserHistory }>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.COMMENTS}>
          <CommentsScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
