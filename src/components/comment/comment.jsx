import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { getDiffTime, timeAdapter } from '../../utils/common';
import { HtmlEntities } from '../../utils/const';
import CommentsList from '../comments-list/comments-list';
import itemProp from '../../utils/item.prop';

function Comment({comment}) {
  const [hasComments, setHasComments] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const {by, text, time, kids} = comment;
  let he = require('he');

  const diffTime = getDiffTime(time);

  useEffect(() => {
    if (kids) {
      setHasComments(true);
    }
  }, [kids]);

  const commentsCounter = (kids) => {
    return kids.length > 1
      ? `${kids.length} comments`
      : `${kids.length} comment`
  };

  const handleClick = (evt) => {
    evt.preventDefault();

    if (hasComments) {
      setShowComments(!showComments);
    }
  }

  return (
    <li className={`comments__item item ${hasComments ? `item--parent` : ``}`}>
      <ul className="item__data data">
        <li className="data__point data__time">{timeAdapter(diffTime)}</li>
        <li className="data__point data__author">{by}</li>

        {hasComments && <li className="data__point data__comments data__comments--kids" onClick={handleClick}>
          {commentsCounter(kids)}
        </li>}

      </ul>

      <div className="item__text" onClick={handleClick}>
        <Markdown 
        children={he.decode(text)}
        options={{ namedCodesToUnicode: HtmlEntities}}
        />
      </div>

      {showComments && <CommentsList commentsID={kids} parentID={comment.id} />}
    </li>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape(itemProp).isRequired,
}

export default Comment;
