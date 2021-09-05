import React from 'react';
import moment from 'moment';

import { getDiffTime } from '../../utils/common';

function News({news}) {
  const {by, descendants, score, time, title, url} = news;

  const diffTime = getDiffTime(time);

  return (
    <li className="catalog__item item">
      <div className="item__stat">
        <div className="item__stat-inner item__points">
          <h3 className="item__stat-header item__points-info">{score}</h3>
          <p className="item__stat-text item__points-text">points</p>
        </div>
        <div className="item__stat-inner item__comments">
          <h3 className="item__stat-header item__comments-info">{descendants}</h3>
          <p className="item__stat-text item__comments-text">comments</p>
        </div>
      </div>
      <div className="item__info">
        <h3 className="item__header">{title}</h3>

        <ul className="item__data">
          <li className="item__data-point item__data-time">{diffTime} mins ago</li>
          <li className="item__data-point item__data-author">{by}</li>
          <li className="item__data-point item__data-page">
            <a href="url.com" className="item__data-link">url.com</a>
          </li>
        </ul>
      </div>
      <div className="item__button">
        <a className="item__button-link" href={url}>Read more</a>
      </div>
    </li>
  )
}

export default News;
