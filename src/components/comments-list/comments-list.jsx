import React from 'react';

import Comment from '../comment/comment';

function CommentsList({comments}) {
  console.log(comments);

  return (
    <ul className="comments__list">
      {comments.map((comment) => {
        if (!comment.deleted) {
          return <Comment comment={comment} key={comment.id} />
        }
        
        return '';
      })}
    </ul>
  )
}

export default CommentsList;
