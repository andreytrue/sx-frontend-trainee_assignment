import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItem } from '../../store/api-actions';
import { getComments } from '../../store/selectors';

import Comment from '../comment/comment';

function CommentsList({commentsID, parentID}) {
  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  useEffect(() => {
    const isCommentInclude = comments.some(item => commentsID.includes(item.id));
    
    if (!isCommentInclude) {
      dispatch(fetchItem(commentsID));
    }

  }, [dispatch, commentsID, comments]);

  return (
    <ul className="comments__list">
      {comments.map((comment) => {
        if (!comment.deleted && comment.parent === parentID) {
          return <Comment comment={comment} key={comment.id} />
        }

        return '';
      })}
    </ul>
  )
}

export default CommentsList;
