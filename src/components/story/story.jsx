import React, { useState, useEffect } from 'react';

import { getDiffTime, getSourceByUrl, timeAdapter } from '../../utils/common';

import HasCommentsButton from '../comments-buttons/has-comments-button';
import NoCommentsButton from '../comments-buttons/no-comments-button';

function Story({story}) {
  const [source, setSource] = useState('');
  const [hasComments, setHasComments] = useState(false);

  const {by, id, deleted, descendants, score, time, title, url} = story;

  const diffTime = getDiffTime(time);

  useEffect(() => {
    if (url) {
      setSource(getSourceByUrl(url));
    }

    if (descendants > 0) {
      setHasComments(true);
    }
  }, [url, descendants]);

  if (!deleted) {
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
            <li className="data__point data__time">{timeAdapter(diffTime)}</li>
            <li className="data__point data__author">{by}</li>
            {source && <li className="data__point data__page">
                <a href={url} className="data__link">{source}</a>
              </li>}
          </ul>
        </div>
        {source && <div className="item__button">
          <a className="item__button-link" href={url}>Read more</a>
        </div>}
      </li>
    )
  }
}

export default Story;
