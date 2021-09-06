import React from 'react';
import { Link } from 'react-router-dom';

function HasCommentsButton({id, descendants}) {
  return (
    <Link to={`/news/${id}`} className="item__stat-link">
      <div className="item__stat-inner item__comments">
        <h3 className="item__stat-header item__comments-info">{descendants}</h3>
        <p className="item__stat-text item__comments-text">comments</p>
      </div>
    </Link>
  )
}

export default HasCommentsButton;
