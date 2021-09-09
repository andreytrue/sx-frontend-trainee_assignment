import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import MainScreen from '../main-screen/main-screen';
import { AppRoute } from '../../utils/const';
import CommentsScreen from '../comments-screen/comments-screen';

function App() {
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
