import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIDList, getIDListStatus, getStories, getStoriesStatus } from '../../store/selectors';
import { fetchID, fetchItem } from '../../store/api-actions';

import Header from '../header/header';
import Footer from '../footer/footer';
import StoriesList from '../stories-list/stories-list';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen() {
  const IDList = useSelector(getIDList);
  const IDListStatus = useSelector(getIDListStatus);
  const storiesList = useSelector(getStories);
  const storiesStatus = useSelector(getStoriesStatus);
  const dispatch = useDispatch();

  const updateStories = () => {
    dispatch(fetchID());
    dispatch(fetchItem(IDList));
  };

  useEffect(() => {
    if (IDList.length > 0 && storiesList.length === 0) {
      dispatch(fetchItem(IDList));
    }

    const update = setTimeout(() => {
      dispatch(fetchID());
      dispatch(fetchItem(IDList));
    }, 60000);

    return () => clearTimeout(update);
  }, [IDList, storiesList, dispatch]);

  if (!storiesStatus && !IDListStatus) {
    return (
      <LoadingScreen />
    )
  }

  const handleRefreshClick = (evt) => {
    evt.preventDefault();

    updateStories();
  }

  return (
    <React.Fragment>
      <Header handleRefreshClick={handleRefreshClick} />

      <main className="page__main main">
        <section className="main__catalog catalog">
          <h2 className="catalog__header">Latest News of Today</h2>

          <StoriesList storiesList={storiesList} />
        </section>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default React.memo(MainScreen);
