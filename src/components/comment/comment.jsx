import React, { useState, useEffect } from 'react';

import { getDiffTime, timeAdapter } from '../../utils/common';
import CommentsList from '../comments-list/comments-list';

function Comment({comment}) {
  const [hasComments, setHasComments] = useState(false);
  const {by, text, time, kids} = comment;

  const diffTime = getDiffTime(time);

  useEffect(() => {
    if (kids) {
      setHasComments(true);
    }
  }, [kids]);

  return (
    <li className="comments__item item">
      <ul className="item__data data">
        <li className="data-point data-time">{timeAdapter(diffTime)}</li>
        <li className="data-point data-author">{by}</li>
      </ul>

      <p className="item__text">{text}</p>

      {hasComments && <CommentsList commentsID={kids} parentID={comment.id} />}
    </li>
  )
}

export default Comment;
