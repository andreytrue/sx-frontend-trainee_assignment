import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetSelectedStory, selectedStoryIsLoading } from '../../store/action';
import { fetchSelectedStory } from '../../store/api-actions';
import { getSelectedStory, getSelectedStoryStatus } from '../../store/selectors';

import Header from '../header/header';
import CommentsList from '../comments-list/comments-list';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';

import { getDiffTime, getSourceByUrl, timeAdapter } from '../../utils/common';
import { AppRoute } from '../../utils/const';

function CommentsScreen() {
  const {id} = useParams();

  const selectedStory = useSelector(getSelectedStory);
  const isSelectedStoryLoaded = useSelector(getSelectedStoryStatus);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSelectedStory(id));
  
    const update = setTimeout(() => {
      dispatch(fetchSelectedStory(id));
    }, 10000);

    return () => {
      clearTimeout(update);
      dispatch(selectedStoryIsLoading(false));
      dispatch(resetSelectedStory());
    };
  }, [dispatch, id])

  const {by, descendants, kids, time, title, url} = selectedStory;
  const diffTime = getDiffTime(time);

  if (!isSelectedStoryLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handleRefreshClick = (evt) => {
    evt.preventDefault();

    dispatch(fetchSelectedStory(id));
    console.log('clicked')
  }

  const handleReturnClick = (evt) => {
    evt.preventDefault();

    history.push(AppRoute.MAIN);
  }

  // setInterval(updateStories, 60000);

  return (
    <React.Fragment>
      <Header handleRefreshClick={handleRefreshClick} handleReturnClick={handleReturnClick} />

      <main className="page__main main">
        <section className="page__comments comments">
          <div className="comments__wrapper">
            <div className="comments__inner">
              <h2 className="comments__header">{ title }</h2>
              {url && <a href={url} className="comments__link">({ getSourceByUrl(url) })</a>}
            </div>

            <ul className="item__data data">
              <li className="data__point data__time">{ timeAdapter(diffTime) }</li>
              <li className="data__point data__author">{ by }</li>
              <li className="data__point data__comments">
                {descendants > 1
                  ? `${descendants} comments`
                  : `${descendants} comment`}
              </li>
            </ul>
          </div>

          <CommentsList commentsID={kids} parentID={Number(id)} />
        </section>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default CommentsScreen;
