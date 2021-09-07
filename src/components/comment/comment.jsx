import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import { getDiffTime, timeAdapter } from '../../utils/common';
import { HtmlEntities } from '../../utils/const';
import CommentsList from '../comments-list/comments-list';

function Comment({comment}) {
  const [hasComments, setHasComments] = useState(false);
  const {by, text, time, kids} = comment;
  let he = require('he');

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

      <div className="item__text">
        <Markdown 
        children={he.decode(text)}
        options={{ namedCodesToUnicode: HtmlEntities}}
        />
      </div>

      {hasComments && <CommentsList commentsID={kids} parentID={comment.id} />}
    </li>
  )
}

export default Comment;
