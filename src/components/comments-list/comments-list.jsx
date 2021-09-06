import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItem } from '../../store/api-actions';
import { getComments } from '../../store/selectors';

import Comment from '../comment/comment';

function CommentsList({commentsID, parentID}) {
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchItem(commentsID));
  }, [dispatch]);

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
