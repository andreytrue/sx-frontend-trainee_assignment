import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getNews, getComments } from '../../store/selectors';
import { fetchItem } from '../../store/api-actions';

import Header from '../header/header';

function CommentsScreen() {
  const {id} = useParams();
  const newsList = useSelector(getNews);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  const news = newsList.find(item => item.id === Number(id));

  useEffect(() => {
    if (news.kids.length > 0) {
      dispatch(fetchItem(news.kids));
    }
  }, [news, dispatch]);

  console.log(comments);

  return (
    // <h1>Hello {id}</h1>
    <React.Fragment>
      <Header />
    </React.Fragment>
  )
}

export default CommentsScreen;
