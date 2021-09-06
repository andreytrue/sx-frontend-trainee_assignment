import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getNews, getComments } from '../../store/selectors';
import { fetchItem } from '../../store/api-actions';

import Header from '../header/header';
import CommentsList from '../comments-list/comments-list';

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

  return (
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <section className="page__comments comments">
          <h2 className="comments__header">{news.title}</h2>

          <CommentsList comments={comments} />
        </section>
      </main>

    </React.Fragment>
  )
}

export default CommentsScreen;
