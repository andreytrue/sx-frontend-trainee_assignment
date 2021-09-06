import React, { useState, useEffect } from 'react';

import { getDiffTime, getURLSource, timeAdapter } from '../../utils/common';

import HasCommentsButton from '../comments-buttons/has-comments-button';
import NoCommentsButton from '../comments-buttons/no-comments-button';

function News({news}) {
  const [source, setSource] = useState('');
  const [hasComments, setHasComments] = useState(false);

  const {by, id, descendants, score, time, title, url} = news;

  const diffTime = getDiffTime(time);

  useEffect(() => {
    if (url) {
      setSource(getURLSource(url));
    }

    if (descendants > 0) {
      setHasComments(true);
    }
  }, [url, descendants]);

  return (
    <li className="catalog__item item">
      <div className="item__stat">
        <div className="item__stat-inner item__points">
          <h3 className="item__stat-header item__points-info">{score}</h3>
          <p className="item__stat-text item__points-text">points</p>
        </div>
        
        {hasComments
          ? <HasCommentsButton descendants={descendants} id={id} />
          : <NoCommentsButton />}

      </div>
      <div className="item__info">
        <h3 className="item__header">{title}</h3>

        <ul className="item__data data">
          <li className="data-point data-time">{timeAdapter(diffTime)}</li>
          <li className="data-point data-author">{by}</li>
          {source && <li className="data-point data-page">
              <a href={url} className="data-link">{source}</a>
            </li>}
        </ul>
      </div>
      {source && <div className="item__button">
        <a className="item__button-link" href={url}>Read more</a>
      </div>}
    </li>
  )
}

export default News;
