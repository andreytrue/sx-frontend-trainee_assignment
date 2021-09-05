import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getID } from '../../store/selectors';
import { fetchItem } from '../../store/api-actions';

import MainScreen from '../main-screen/main-screen';

function App() {
  const id = useSelector(getID);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id.length > 0) {
      dispatch(fetchItem(id));
    }
  }, [id, dispatch]);

  return (
    <MainScreen />
  );
}

export default App;
