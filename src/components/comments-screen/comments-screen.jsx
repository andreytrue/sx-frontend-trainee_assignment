import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStories } from '../../store/selectors';

import { getDiffTime, getSourceByUrl, timeAdapter } from '../../utils/common';

import Header from '../header/header';
import CommentsList from '../comments-list/comments-list';
import Footer from '../footer/footer';
// import LoadingScreen from '../loading-screen/loading-screen';

function CommentsScreen() {
  const {id} = useParams();
  const newsList = useSelector(getStories);

  // if (newsList.length === 0) {
  //   return (
  //     <LoadingScreen />
  //   )
  // }

  const news = newsList.find(item => item.id === Number(id));
  const {by, descendants, kids, time, title, url} = news;
  const diffTime = getDiffTime(time);

  return (
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <section className="page__comments comments">
          <div className="comments__wrapper">
            <div className="comments__inner">
              <h2 className="comments__header">{ title }</h2>
              {url && <a href={url} className="comments__link">({ getSourceByUrl(url) })</a>}
            </div>

            <ul className="item__data data">
              <li className="data-point data-time">{ timeAdapter(diffTime) }</li>
              <li className="data-point data-author">{ by }</li>
              <li className="data-point data-comments">
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
