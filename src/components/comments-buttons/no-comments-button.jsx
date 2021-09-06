import React from 'react';

function NoCommentsButton() {
  return (
    <div className="item__stat-inner item__comments">
      <h3 className="item__stat-header item__comments-info">0</h3>
      <p className="item__stat-text item__comments-text">comments</p>
    </div>
  )
}

export default NoCommentsButton;
